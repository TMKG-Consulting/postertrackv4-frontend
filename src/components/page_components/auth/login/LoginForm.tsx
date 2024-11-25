"use client";
import React from "react";
import { Formik, Form } from "formik";
import AppButton from "@/components/shared/AppButton";
import LoginTab from "./LoginTab";
import AppInput from "@/components/shared/AppInput";
import AppCheckbox from "@/components/shared/AppCheckbox";
import Link from "next/link";
import * as Yup from "yup";

const schema = Yup.object().shape({
	email: Yup.string()
		.required()
		.email("Please provide a valid email address")
		.label("Email"),
	password: Yup.string().required().label("Password"),
});

export default function LoginForm() {
	return (
		<Formik
			initialValues={{
				email: "",
				password: "",
			}}
			validationSchema={schema}
			onSubmit={() => {}}>
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

					<div className="mt-12">
						<LoginTab />
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
							<div className="flex flex-row items-center justify-between">
								<div>
									<AppCheckbox name="remember-me">
										<span className="text-2xl text-[#8D8D8D]">Remember Me</span>
									</AppCheckbox>
								</div>
								<Link
									href={"/auth/forgot-password"}
									className="text-primary text-2xl">
									Forgot Password ?
								</Link>
							</div>
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
