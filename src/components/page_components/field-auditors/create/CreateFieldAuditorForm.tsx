"use client";
import React from "react";
import { ErrorMessage, Form, Formik, FormikHelpers } from "formik";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import StatesCovered from "./StatesCovered";
import useUserManagement from "@/hooks/useUserManagement";
import { FieldAuditor } from "@/types";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const schema = Yup.object().shape({
	firstname: Yup.string().required().label("First Name"),
	lastname: Yup.string().required().label("Last Name"),
	email: Yup.string()
		.required()
		.email("Please provide a valid email address")
		.label("Email"),
	phone: Yup.string().required().label("Phone Number"),
	address: Yup.string().required().label("Address"),
	role: Yup.string().required().label("Role"),
	statesCovered: Yup.array(Yup.number())
		.min(1)
		.required()
		.label("States Covered"),
});

interface FieldAuditorFormProps {
	isEditing?: boolean;
	initialValues?: FieldAuditor;
}

export default function CreateFieldAuditorForm({
	isEditing = false,
	initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		address: "",
		role: "FIELD_AUDITOR",
		statesCovered: [],
	},
}: FieldAuditorFormProps) {
	const { createUser, updateUser } = useUserManagement();
	const { showAndHideAlert } = useAlert();
	const router = useRouter();

	const submitHandler = async (
		values: FieldAuditor,
		{ setSubmitting }: FormikHelpers<FieldAuditor>
	) => {
		try {
			if (!isEditing) {
				const response = await createUser(values);
				console.log(response);

				showAndHideAlert({
					message: "User created successfully.",
					type: "success",
				});
			}

			if (isEditing) {
				const response = await updateUser(initialValues.id!, values);
				console.log(response);

				showAndHideAlert({
					message: "User updated successfully.",
					type: "success",
				});
			}

			setSubmitting(false);

			router.push("/field-auditors");
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
				<h1 className="text-[2.8rem] font-extrabold">Add Field Auditor</h1>
			</div>

			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={submitHandler}>
				{({ isValidating, isSubmitting, values, setFieldValue }) => (
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<div className="grid md:grid-cols-2 gap-10">
							<div className="w-full">
								<AppInput
									label="First Name"
									name="firstname"
									placeholder="First Name"
								/>
							</div>
							<div className="w-full">
								<AppInput
									label="Last Name"
									name="lastname"
									placeholder="Last Name"
								/>
							</div>
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
							<StatesCovered
								//@ts-ignore
								selectedStates={values.statesCovered}
								addState={(val) => {
									const prev = [...values.statesCovered];
									prev.push(val);
									setFieldValue("statesCovered", prev);
								}}
								removeState={(val) => {
									let prev = [...values.statesCovered];
									prev = prev.filter((d) => d !== val);
									setFieldValue("statesCovered", prev);
								}}
							/>
							<ErrorMessage
								name="statesCovered"
								component={"p"}
								className="text-2xl font-medium text-red-400"
							/>
						</div>
						<AppButton
							showLoading={!isValidating && isSubmitting}
							className="font-semibold"
							fullyRounded
							label={
								!isEditing ? "Create Field Auditor" : "Update Field Auditor"
							}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
