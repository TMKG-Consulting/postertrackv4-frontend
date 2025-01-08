"use client";
import React from "react";
import { Form, Formik, ErrorMessage, FormikHelpers } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import AdditionalEmailAddresses from "./AdditionalEmailAddresses";
import useUserManagement from "@/hooks/useUserManagement";
import { Client } from "@/types";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import ClientAdvertiserName from "./ClientAdvertiserName";

const schema = Yup.object().shape({
	name: Yup.number().required().label("Name"),
	email: Yup.string()
		.required()
		.email("Please provide a valid email address")
		.label("Email"),
	phone: Yup.string().required().label("Phone Number"),
	address: Yup.string().required().label("Address"),
	role: Yup.string().required().label("Role"),
	industry: Yup.string().required().label("Industry"),
	additionalEmail: Yup.array(Yup.string()).optional().label("Additional Email"),
});

interface ClientFormProps {
	isEditing?: boolean;
	initialValues?: Client;
}

export default function CreateClientForm({
	isEditing,
	initialValues = {
		name: "",
		email: "",
		phone: "",
		address: "",
		role: "CLIENT_AGENCY_USER",
		additionalEmail: [],
		industry: "",
	},
}: ClientFormProps) {
	const { createUser } = useUserManagement();
	const { showAndHideAlert } = useAlert();
	const router = useRouter();
	const { industries } = useRootStore();

	const submitHandler = async (
		values: Client,
		{ setSubmitting }: FormikHelpers<Client>
	) => {
		try {
			const response = await createUser(values);
			console.log(response);

			showAndHideAlert({
				message: "User created successfully.",
				type: "success",
			});

			setSubmitting(false);

			router.push("/clients");
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
				<h1 className="text-[2.8rem] font-extrabold">Add New Client</h1>
			</div>

			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={submitHandler}>
				{({ isSubmitting, setFieldValue, isValidating, values, errors }) => (
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<div className="grid  gap-10">
							<ClientAdvertiserName />
						</div>
						<div className="grid md:grid-cols-2 gap-10">
							<div className="w-full">
								<AppInput
									label="Email Address"
									name="email"
									placeholder="Email Address"
								/>
							</div>
							<div className="w-full">
								<AppInput
									label="Phone Number"
									name="phone"
									placeholder="Phone Number"
								/>
							</div>
						</div>
						<div className="w-full">
							<AppInput label="Address" name="address" placeholder="Address" />
						</div>
						<div className="w-full flex flex-col gap-y-5">
							<AdditionalEmailAddresses
								emails={values.additionalEmail}
								addEmail={(email) => {
									const prev = [...values.additionalEmail];
									prev.push(email);
									setFieldValue("additionalEmail", prev);
								}}
								removeEmail={(index) => {
									const prev = [...values.additionalEmail];
									const newPrev = prev.filter((e, i) => i !== index);
									setFieldValue("additionalEmail", newPrev);
								}}
							/>
							<ErrorMessage
								name="additionalEmail"
								component={"p"}
								className="text-2xl font-medium text-red-400"
							/>
						</div>
						<div className="w-full flex flex-col gap-y-5">
							<Dropdown
								top={-100}
								items={industries}
								renderButton={({ setOpen, open }) => (
									<div className="w-full flex flex-col gap-y-5">
										<span className="text-2xl font-semibold">Industry</span>
										<button
											type="button"
											onClick={() => setOpen(!open)}
											className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
											{values.industry === "" && (
												<span className="text-2xl text-[#8D8D8D]">
													Select Industry
												</span>
											)}
											{values.industry !== "" && (
												<span className="text-2xl text-appBlack">
													{
														industries.find(
															(d) => d.id === Number(values.industry)
														)?.name
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
											setFieldValue("industry", item.id);
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
							label={"Create Advertiser"}
							showLoading={!isValidating && isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
