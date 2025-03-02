"use client";
import React, { useState } from "react";
import AppButton from "@/components/shared/AppButton";
import Modal from "@/components/shared/Modal";
import { Formik, Form, FormikHelpers, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import { useQuery } from "@tanstack/react-query";
import AppLoader from "@/components/shared/AppLoader";
import { SiteAssignmentReport } from "@/types";

const schema = Yup.object().shape({
	visibilityDistance: Yup.number().required(),
	trafficDensity: Yup.number().required(),
	trafficSpeed: Yup.number().required(),
	angleVision: Yup.number().required(),
	clutterBillboard: Yup.number().required(),
	clutterFormat: Yup.number().required(),
	proximityCompetition: Yup.number().required(),
	pedestrianTraffic: Yup.number().required(),
	message: Yup.string().required().label("Message"),
	comment: Yup.string().required().label("Comment"),
	structureId: Yup.number().required().label("Structure"),
	posterId: Yup.number().required().label("Poster"),
	illuminationId: Yup.number().required().label("illumination"),
	routeId: Yup.number().required().label("Route"),
	sideId: Yup.number().required().label("Side"),
});

interface BSV {
	visibilityDistance: number;
	trafficDensity: number;
	trafficSpeed: number;
	angleVision: number;
	clutterBillboard: number;
	clutterFormat: number;
	proximityCompetition: number;
	pedestrianTraffic: number;
	message: string;
	comment: string;
	structureId: number | string;
	posterId: number | string;
	illuminationId: number | string;
	routeId: number | string;
	sideId: number | string;
}

export default function UpdateBSV() {
	const [isUpdating, setIsUpdating] = useState(false);
	const { showAndHideAlert } = useAlert();
	const { accessToken } = useCredentials();
	const { reportBeingViewed, setReportBeingViewed } = useSiteStore();

	const { data, isLoading } = useQuery({
		queryKey: ["entities", "illuminations"],
		queryFn: async () => {
			const response = await ApiInstance.get("/entities", {
				headers: {
					"auth-token": accessToken,
				},
			});
			return response.data.data;
		},
		gcTime: 0,
	});

	console.log(reportBeingViewed);

	const initialValues: BSV = {
		visibilityDistance: reportBeingViewed?.visibilityDistance ?? 0,
		trafficDensity: reportBeingViewed?.trafficDensity ?? 0,
		trafficSpeed: reportBeingViewed?.trafficSpeed ?? 0,
		angleVision: reportBeingViewed?.angleVision ?? 0,
		clutterBillboard: reportBeingViewed?.clutterBillboard ?? 0,
		clutterFormat: reportBeingViewed?.clutterFormat ?? 0,
		proximityCompetition: reportBeingViewed?.proximityCompetition ?? 0,
		pedestrianTraffic: reportBeingViewed?.pedestrianTraffic ?? 0,
		message: reportBeingViewed?.message ?? "",
		comment: reportBeingViewed?.comment ?? "",
		structureId: reportBeingViewed?.structureId ?? "",
		posterId: reportBeingViewed?.posterId ?? "",
		illuminationId: reportBeingViewed?.illuminationId ?? "",
		routeId: reportBeingViewed?.routeId ?? "",
		sideId: reportBeingViewed?.sideId ?? "",
	};

	async function submitHandler(
		values: BSV,
		{ setSubmitting }: FormikHelpers<BSV>
	) {
		try {
			const {
				visibilityDistance,
				trafficDensity,
				trafficSpeed,
				angleVision,
				clutterBillboard,
				clutterFormat,
				proximityCompetition,
				pedestrianTraffic,
				message,
				comment,
				structureId,
				posterId,
				illuminationId,
				routeId,
				sideId,
			} = values;

			const bsvScore = Object.values({
				visibilityDistance,
				trafficDensity,
				trafficSpeed,
				angleVision,
				clutterBillboard,
				clutterFormat,
				proximityCompetition,
				pedestrianTraffic,
			}).reduce((acc: number, value) => {
				return (acc += Number(value));
			}, 0);

			const response = await ApiInstance.put(
				"/compliance/" + reportBeingViewed?.id,
				{
					bsv: `${bsvScore}%`,
					visibilityDistance: Number(visibilityDistance),
					trafficDensity: Number(trafficDensity),
					trafficSpeed: Number(trafficSpeed),
					angleVision: Number(angleVision),
					clutterBillboard: Number(clutterBillboard),
					clutterFormat: Number(clutterFormat),
					pedestrianTraffic: Number(pedestrianTraffic),
					proximityCompetition: Number(proximityCompetition),
					message,
					comment,
					structureId: Number(structureId),
					posterId: Number(posterId),
					illuminationId: Number(illuminationId),
					routeId: Number(routeId),
					sideId: Number(sideId),
				},
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			if (reportBeingViewed) {
				setReportBeingViewed({
					...reportBeingViewed,
					bsv: `${bsvScore}%`,
					...response.data.updatedCompliance,
				});
			}

			showAndHideAlert({
				message: "Report Updated",
				type: "success",
			});
			setIsUpdating(false);
		} catch (error) {
			const err = error as AxiosError<any>;
			setSubmitting(false);
			showAndHideAlert({
				message:
					err.response?.data.message ?? err.response?.data.error ?? err.message,
				type: "error",
			});
		}
	}

	return (
		<>
			<div className="w-full flex items-center justify-center py-6 border-b border-b-[#dfdfdf]">
				<AppButton onClick={() => setIsUpdating(true)} label="Edit" />
			</div>
			<Modal
				showModal={isUpdating}
				hideModal={() => {
					setIsUpdating(false);
				}}>
				<div className="w-full p-10">
					{isLoading ? (
						<AppLoader />
					) : (
						<Formik
							onSubmit={submitHandler}
							initialValues={initialValues}
							validationSchema={schema}>
							{({ isValidating, isSubmitting, values }) => {
								const {
									visibilityDistance,
									trafficDensity,
									trafficSpeed,
									angleVision,
									clutterBillboard,
									clutterFormat,
									proximityCompetition,
									pedestrianTraffic,
								} = values;
								return (
									<Form className="flex flex-col w-full gap-[15px]">
										<div className="py-5 bg-[#656565] text-white">
											<h2 className="text-3xl font-bold text-center">
												Edit Submitted Report
											</h2>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"structureId"}>
													Structure
												</label>
												<Field
													id={"structureId"}
													name={"structureId"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													{data.structures.map(
														(d: { id: number; name: string }, i: number) => (
															<option key={i} value={d.id}>
																{d.name}
															</option>
														)
													)}
												</Field>
												<ErrorMessage
													name={"structureId"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"posterId"}>
													Poster
												</label>
												<Field
													id={"posterId"}
													name={"posterId"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													{data.posters.map(
														(d: { id: number; name: string }, i: number) => (
															<option key={i} value={d.id}>
																{d.name}
															</option>
														)
													)}
												</Field>
												<ErrorMessage
													name={"posterId"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"illuminationId"}>
													Illumination
												</label>
												<Field
													id={"illuminationId"}
													name={"illuminationId"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													{data.illuminations.map(
														(d: { id: number; name: string }, i: number) => (
															<option key={i} value={d.id}>
																{d.name}
															</option>
														)
													)}
												</Field>
												<ErrorMessage
													name={"illuminationId"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"sideId"}>
													Side
												</label>
												<Field
													id={"sideId"}
													name={"sideId"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													{data.sides.map(
														(d: { id: number; name: string }, i: number) => (
															<option key={i} value={d.id}>
																{d.name}
															</option>
														)
													)}
												</Field>
												<ErrorMessage
													name={"sideId"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"routeId"}>
													Route
												</label>
												<Field
													id={"routeId"}
													name={"routeId"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													{data.routes.map(
														(d: { id: number; name: string }, i: number) => (
															<option key={i} value={d.id}>
																{d.name}
															</option>
														)
													)}
												</Field>
												<ErrorMessage
													name={"routeId"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"comment"}>
													Comment
												</label>
												<Field
													id={"comment"}
													name={"comment"}
													placeholder={"Comment"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
												/>
												<ErrorMessage
													name={"comment"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="w-full flex flex-col gap-y-5">
											<label
												className="text-[1.7rem] text-appBlack font-semibold"
												htmlFor={"message"}>
												Message
											</label>
											<Field
												id={"message"}
												name={"message"}
												placeholder={"message"}
												className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
											/>
											<ErrorMessage
												name={"message"}
												component={"p"}
												className="text-2xl font-medium text-red-400"
											/>
										</div>
										<div className="py-5 bg-[#656565] text-white">
											<h2 className="text-3xl font-bold text-center">
												BSV:
												{Object.values({
													visibilityDistance,
													trafficDensity,
													trafficSpeed,
													angleVision,
													clutterBillboard,
													clutterFormat,
													proximityCompetition,
													pedestrianTraffic,
												}).reduce((acc: number, value) => {
													return (acc += Number(value));
												}, 0)}
												%
											</h2>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"visibilityDistance"}>
													Visibility Distance
												</label>
												<Field
													id={"visibilityDistance"}
													name={"visibilityDistance"}
													placeholder={"visibility Distance"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(20).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"visibilityDistance"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"trafficDensity"}>
													Traffic Density
												</label>
												<Field
													id={"trafficDensity"}
													name={"trafficDensity"}
													placeholder={"Traffic Density"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(15).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"trafficDensity"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"trafficSpeed"}>
													Traffic Speed
												</label>
												<Field
													id={"trafficSpeed"}
													name={"trafficSpeed"}
													placeholder={"Traffic Speed"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(10).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"trafficSpeed"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"angleVision"}>
													Angle of Vision
												</label>
												<Field
													id={"angleVision"}
													name={"angleVision"}
													placeholder={"Angle of Vision"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(15).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"angleVision"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"clutterBillboard"}>
													Clutter by Billboard
												</label>
												<Field
													id={"clutterBillboard"}
													name={"clutterBillboard"}
													placeholder={"Clutter by Billboard"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(15).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"clutterBillboard"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"clutterFormat"}>
													Clutter by Other format
												</label>
												<Field
													id={"clutterFormat"}
													name={"clutterFormat"}
													placeholder={"Clutter by Other format"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(5).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"clutterFormat"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<div className="grid grid-cols-2 gap-5">
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"proximityCompetition"}>
													Proximity of competition
												</label>
												<Field
													id={"proximityCompetition"}
													name={"proximityCompetition"}
													placeholder={"Proximity of competition"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(10).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"proximityCompetition"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
											<div className="w-full flex flex-col gap-y-5">
												<label
													className="text-[1.7rem] text-appBlack font-semibold"
													htmlFor={"pedestrianTraffic"}>
													Pedestrian Traffic Weight
												</label>
												<Field
													id={"pedestrianTraffic"}
													name={"pedestrianTraffic"}
													placeholder={"Pedestrian Traffic Weight"}
													className="h-[50px] rounded-2xl bg-[#F5F5F5] text-2xl font-medium px-[10px] outline-none focus:border-primary border-transparent border-[1.5px] transition-all duration-200"
													as="select">
													<option value={0}>0</option>
													{[...Array(10).keys()].map((i) => (
														<option key={i} value={i + 1}>
															{i + 1}
														</option>
													))}
												</Field>
												<ErrorMessage
													name={"pedestrianTraffic"}
													component={"p"}
													className="text-2xl font-medium text-red-400"
												/>
											</div>
										</div>
										<AppButton
											showLoading={isSubmitting && !isValidating}
											type="submit"
											label="Submit"
										/>
									</Form>
								);
							}}
						</Formik>
					)}
				</div>
			</Modal>
		</>
	);
}
