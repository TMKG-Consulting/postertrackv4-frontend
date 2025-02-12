"use client";
import React from "react";
import { Formik, Form, FormikHelpers } from "formik";
import AppButton from "@/components/shared/AppButton";
import LoginTab from "./LoginTab";
import AppInput from "@/components/shared/AppInput";
import AppCheckbox from "@/components/shared/AppCheckbox";
import Link from "next/link";
import * as Yup from "yup";
import useAuth from "@/hooks/useAuth";
import { LoginData } from "@/types";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import useCredentials from "@/hooks/useCredentials";

const schema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email("Please provide a valid email address")
		.label("Email"),
	password: Yup.string().required().label("Password"),
});

export default function LoginForm() {
	const { login } = useAuth();
	const { showAndHideAlert } = useAlert();
	const { setCredentials } = useCredentials();
	const router = useRouter();

	const initialValues: LoginData = {
		email: "",
		password: "",
	};

	const submitHandler = async function (
		values: LoginData,
		{ setSubmitting }: FormikHelpers<LoginData>
	) {
		try {
			const response = await login(values);
			setCredentials({ accessToken: response.token });
			showAndHideAlert({
				message: "Logged in successfully",
				type: "success",
			});
			router.replace("/");
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				message:
					//@ts-ignore
					err?.response?.data?.error ??
					"An error occurred! Try again or check internet connection",
				type: "error",
			});
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={schema}
			onSubmit={submitHandler}>
			{({ isSubmitting, isValidating }) => (
				<Form className="w-full">
					<div>
						<h2 className="text-[3rem] md:text-[3.8rem] font-extrabold text-[#424242]">
							Log in to your Account
						</h2>
						<p className="text-[#6C6C6C] text-[1.7rem]">
							Welcome back, please login to proceed
						</p>
					</div>

					<div className="mt-12 flex flex-col gap-y-10">
						<AppInput
							name="email"
							label="Email Address"
							placeholder="Email Address"
							type="email"
						/>

						<div className="flex flex-col gap-y-5">
							<AppInput.Password
								name="password"
								label="Password"
								placeholder="Password"
							/>
							{/* <div className="flex flex-row items-center justify-end">
								<Link
									href={"/auth/forgot-password"}
									className="text-primary text-2xl">
									Forgot Password ?
								</Link>
							</div> */}
						</div>

						<AppButton
							showLoading={!isValidating && isSubmitting}
							label="Login"
							className="font-semibold !text-[1.7rem]"
						/>
					</div>
				</Form>
			)}
		</Formik>
	);
}
