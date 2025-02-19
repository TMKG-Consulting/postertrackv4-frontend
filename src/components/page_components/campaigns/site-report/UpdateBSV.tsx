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

const schema = Yup.object().shape({
	visibilityDistance: Yup.number().required(),
	trafficDensity: Yup.number().required(),
	trafficSpeed: Yup.number().required(),
	angleOfVision: Yup.number().required(),
	clutterByBillboard: Yup.number().required(),
	clutterOtherFormat: Yup.number().required(),
	proximityOfCompetition: Yup.number().required(),
	pedestrianTrafficWeight: Yup.number().required(),
});

interface BSV {
	visibilityDistance: number;
	trafficDensity: number;
	trafficSpeed: number;
	angleOfVision: number;
	clutterByBillboard: number;
	clutterOtherFormat: number;
	proximityOfCompetition: number;
	pedestrianTrafficWeight: number;
}

export default function UpdateBSV() {
	const [isUpdating, setIsUpdating] = useState(false);
	const { showAndHideAlert } = useAlert();
	const { accessToken } = useCredentials();
	const { reportBeingViewed, setReportBeingViewed } = useSiteStore();

	const initialValues: BSV = {
		visibilityDistance: 0,
		trafficDensity: 0,
		trafficSpeed: 0,
		angleOfVision: 0,
		clutterByBillboard: 0,
		clutterOtherFormat: 0,
		proximityOfCompetition: 0,
		pedestrianTrafficWeight: 0,
	};

	async function submitHandler(
		values: BSV,
		{ setSubmitting }: FormikHelpers<BSV>
	) {
		try {
			const bsvScore = Object.values(values).reduce((acc: number, value) => {
				return (acc += Number(value));
			}, 0);

			await ApiInstance.put(
				"/compliance/" + reportBeingViewed?.id,
				{
					bsv: `${bsvScore}%`,
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
				});
			}
			showAndHideAlert({
				message: "BSV Updated",
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
					<Formik
						onSubmit={submitHandler}
						initialValues={initialValues}
						validationSchema={schema}>
						{({ isValidating, isSubmitting, values }) => (
							<Form className="flex flex-col w-full gap-[15px]">
								<h2 className="text-3xl font-bold pb-8 border-b border-b-gray-300">
									BSV:
									{Object.values(values).reduce((acc: number, value) => {
										return (acc += Number(value));
									}, 0)}
									%
								</h2>
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
											htmlFor={"angleOfVision"}>
											Angle of Vision
										</label>
										<Field
											id={"angleOfVision"}
											name={"angleOfVision"}
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
											name={"angleOfVision"}
											component={"p"}
											className="text-2xl font-medium text-red-400"
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-5">
									<div className="w-full flex flex-col gap-y-5">
										<label
											className="text-[1.7rem] text-appBlack font-semibold"
											htmlFor={"clutterByBillboard"}>
											Clutter by Billboard
										</label>
										<Field
											id={"clutterByBillboard"}
											name={"clutterByBillboard"}
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
											name={"clutterByBillboard"}
											component={"p"}
											className="text-2xl font-medium text-red-400"
										/>
									</div>
									<div className="w-full flex flex-col gap-y-5">
										<label
											className="text-[1.7rem] text-appBlack font-semibold"
											htmlFor={"clutterOtherFormat"}>
											Clutter by Other format
										</label>
										<Field
											id={"clutterOtherFormat"}
											name={"clutterOtherFormat"}
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
											name={"clutterOtherFormat"}
											component={"p"}
											className="text-2xl font-medium text-red-400"
										/>
									</div>
								</div>
								<div className="grid grid-cols-2 gap-5">
									<div className="w-full flex flex-col gap-y-5">
										<label
											className="text-[1.7rem] text-appBlack font-semibold"
											htmlFor={"proximityOfCompetition"}>
											Proximity of competition
										</label>
										<Field
											id={"proximityOfCompetition"}
											name={"proximityOfCompetition"}
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
											name={"proximityOfCompetition"}
											component={"p"}
											className="text-2xl font-medium text-red-400"
										/>
									</div>
									<div className="w-full flex flex-col gap-y-5">
										<label
											className="text-[1.7rem] text-appBlack font-semibold"
											htmlFor={"pedestrianTrafficWeight"}>
											Pedestrian Traffic Weight
										</label>
										<Field
											id={"pedestrianTrafficWeight"}
											name={"pedestrianTrafficWeight"}
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
											name={"pedestrianTrafficWeight"}
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
						)}
					</Formik>
				</div>
			</Modal>
		</>
	);
}
