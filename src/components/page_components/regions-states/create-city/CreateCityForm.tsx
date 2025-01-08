"use client";
import React from "react";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import { City, State } from "@/types";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { useLocationsStore } from "@/components/shared/providers/LocationsProvider";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";

const schema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
});

interface CityForm {
	isEditing?: boolean;
	initialValues?: City;
}

export default function CreateCityForm({
	isEditing,
	initialValues = {
		name: "",
		stateId: "",
	},
}: CityForm) {
	const { showAndHideAlert } = useAlert();
	const router = useRouter();
	const { accessToken } = useCredentials();
	const { states, cities, setCities } = useLocationsStore();

	const submitHandler = async (
		values: City,
		{ setSubmitting }: FormikHelpers<City>
	) => {
		try {
			const res = await ApiInstance.post("/api/cities", values, {
				headers: {
					"auth-token": accessToken,
				},
			});

			showAndHideAlert({
				message: "City created successfully.",
				type: "success",
			});

			setSubmitting(false);

			setCities([...cities, res.data]);

			router.push("/regions-states");
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				//@ts-ignore
				message: err?.response?.data?.error,
				type: "error",
			});
			setSubmitting(false);
		}
	};

	return (
		<div
			className={`w-full ${
				!isEditing ? "md:w-[85%] xl:w-[60%]" : ""
			} bg-white rounded-2xl border border-[#E2E2E2]`}>
			<div className="p-5 md:p-12">
				<h1 className="text-[2.8rem] font-extrabold">Add New City</h1>
			</div>

			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={submitHandler}>
				{({ isSubmitting, isValidating, values, setFieldValue }) => (
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<div className="grid  gap-10">
							<div className="w-full">
								<AppInput label="Name" name="name" placeholder="Name" />
							</div>
						</div>
						<div className="w-full flex flex-col gap-y-5">
							<Dropdown
								top={-100}
								items={states}
								renderButton={({ setOpen, open }) => (
									<div className="w-full flex flex-col gap-y-5">
										<span className="text-2xl font-semibold">City</span>
										<button
											type="button"
											onClick={() => setOpen(!open)}
											className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
											{values.stateId === "" && (
												<span className="text-2xl text-[#8D8D8D]">
													Select State
												</span>
											)}
											{values.stateId !== "" && (
												<span className="text-2xl text-appBlack">
													{
														states.find((d) => d.id === Number(values.stateId))
															?.name
													}
												</span>
											)}
											<ChevronIcon fill={"#8D8D8D"} />
										</button>
									</div>
								)}
								renderItem={({ item, index, setOpen }) => (
									<button
										key={index}
										onClick={() => {
											setFieldValue("stateId", item.id);
											setOpen(false);
										}}
										className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0 hover:bg-[#f5f5f5]"
										type="button">
										{item.name}
									</button>
								)}
							/>
							<ErrorMessage
								name="industry"
								component={"p"}
								className="text-2xl font-medium text-red-400"
							/>
						</div>
						<AppButton
							className="font-semibold"
							fullyRounded
							label={"Create City"}
							showLoading={!isValidating && isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
