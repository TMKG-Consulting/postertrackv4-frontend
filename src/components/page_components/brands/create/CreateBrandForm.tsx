"use client";
import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import { Brand } from "@/types";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import BrandAdvertiser from "./BrandAdvertiser";
import BrandCategory from "./Brandcategory";

const schema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	advertiserId: Yup.number().required().label("Advertiser"),
	categoryId: Yup.number().required().label("Category"),
});

interface BrandFormProps {
	isEditing?: boolean;
	initialValues?: Brand;
}

export default function CreateBrandForm({
	isEditing,
	initialValues = {
		name: "",
		advertiserId: "",
		categoryId: "",
	},
}: BrandFormProps) {
	const { accessToken } = useCredentials();
	const { showAndHideAlert } = useAlert();
	const router = useRouter();

	const submitHandler = async (
		values: Brand,
		{ setSubmitting }: FormikHelpers<Brand>
	) => {
		try {
			await ApiInstance.post("/api/brands", values, {
				headers: {
					"auth-token": accessToken,
				},
			});

			showAndHideAlert({
				message: "Brand created successfully.",
				type: "success",
			});

			setSubmitting(false);

			router.push("/brands");
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
				<h1 className="text-[2.8rem] font-extrabold">Add New Brand</h1>
			</div>

			<Formik
				validationSchema={schema}
				initialValues={initialValues}
				onSubmit={submitHandler}>
				{({ isSubmitting, setFieldValue, isValidating, values, errors }) => (
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<div className="w-full">
							<AppInput
								label="Brand Name"
								name="name"
								placeholder="Brand Name"
							/>
						</div>

						<div className="grid  gap-10">
							<BrandAdvertiser />
						</div>

						<div className="grid  gap-10">
							<BrandCategory />
						</div>

						<AppButton
							className="font-semibold"
							fullyRounded
							label={"Create Brand"}
							showLoading={!isValidating && isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
