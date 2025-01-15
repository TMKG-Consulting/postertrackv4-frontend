"use client";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import useUserManagement from "@/hooks/useUserManagement";
import { AccountManager } from "@/types";
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
});

interface AccountManagerFormProps {
	isEditing?: boolean;
	initialValues?: AccountManager;
	editCallback?: (data: any) => void;
}

export default function CreateAccountManagerForm({
	isEditing = false,
	initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		phone: "",
		address: "",
		role: "CHIEF_ACCOUNT_MANAGER",
	},
	editCallback,
}: AccountManagerFormProps) {
	const { createUser, updateUser } = useUserManagement();
	const { showAndHideAlert } = useAlert();
	const router = useRouter();

	const submitHandler = async (
		values: AccountManager,
		{ setSubmitting }: FormikHelpers<AccountManager>
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
				//@ts-ignore
				delete values.statesCovered;
				delete values.name;

				const response = await updateUser(initialValues.id!, values);
				console.log(response);

				showAndHideAlert({
					message: "User updated successfully.",
					type: "success",
				});

				// @ts-ignore
				editCallback(response);
			}

			setSubmitting(false);

			router.push("/account-managers");
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
				<h1 className="text-[2.8rem] font-extrabold">
					{isEditing ? "Edit" : "Add"} Account Manager
				</h1>
			</div>

			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={submitHandler}>
				{({ values, setFieldValue, isValidating, isSubmitting }) => (
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<Dropdown
							items={["CHIEF_ACCOUNT_MANAGER", "ACCOUNT_MANAGER"]}
							renderButton={({ setOpen, open }) => (
								<div
									onClick={() => setOpen(!open)}
									className="w-full flex flex-col gap-y-5 cursor-pointer">
									<span className="text-2xl font-semibold">Role</span>
									<div
										className={`w-full h-[50px] bg-[#F5F5F5] rounded-xl flex items-center justify-between p-3 gap-3 border-[1.5px] transition-all duration-200 ${
											open ? "border-primary " : "border-transparent"
										}`}>
										<span className="text-2xl font-semibold">
											{values.role}
										</span>
										<span
											className={`flex relative transition-all duration-200 ${
												open ? "rotate-[180deg]" : ""
											}`}>
											<ChevronIcon fill="black" />
										</span>
									</div>
								</div>
							)}
							renderItem={({ item, index, setOpen }) => (
								<button
									onClick={() => {
										setFieldValue("role", item);
										setOpen(false);
									}}
									key={index}
									className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0 hover:bg-[#F5F5F5]"
									type="button">
									{item}
								</button>
							)}
						/>
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
						<AppButton
							showLoading={!isValidating && isSubmitting}
							className="font-semibold"
							fullyRounded
							label={!isEditing ? "Create Account Manager" : "Update Account"}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
