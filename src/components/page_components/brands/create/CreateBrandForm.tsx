"use client";
import React, { useState } from "react";
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
import PlusIcon from "@/components/shared/icons/PlusIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";

const schema = Yup.object().shape({
	name: Yup.string().required().label("Name"),
	advertiserId: Yup.number().required().label("Advertiser"),
	categoryId: Yup.number().required().label("Category"),
});

interface BrandFormProps {
	isEditing?: boolean;
	initialValues?: Brand;
	brandId?: string | number;
	editCallback?: (data: any) => void;
}

export default function CreateBrandForm({
	isEditing,
	initialValues = {
		name: "",
		advertiserId: "",
		categoryId: "",
	},
	brandId,
	editCallback,
}: BrandFormProps) {
	const { accessToken } = useCredentials();
	const { showAndHideAlert } = useAlert();
	const router = useRouter();
	const [file, setFile] = useState<File | null>(null);

	const submitHandler = async (
		values: Brand,
		{ setSubmitting }: FormikHelpers<Brand>
	) => {
		try {
			const formData = new FormData();

			Object.keys(values).forEach((key) => {
				// @ts-ignore
				if (Array.isArray(values[key])) {
					// @ts-ignore
					values[key].forEach((val) => {
						formData.append(key, val);
					});
				} else {
					// @ts-ignore
					formData.append(key, values[key]);
				}
			});

			if (file) {
				formData.append("logo", new Blob([file], { type: file.type }));
			}

			if (!isEditing) {
				await ApiInstance.post("/api/brands", formData, {
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
			} else {
				const res = await ApiInstance.put("/api/brand/" + brandId, formData, {
					headers: {
						"auth-token": accessToken,
					},
				});

				showAndHideAlert({
					message: "Brand updated successfully.",
					type: "success",
				});

				setSubmitting(false);

				// @ts-ignore
				editCallback(res.data);
			}
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
					{!isEditing ? "Add New Brand" : "Edit Brand"}
				</h1>
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

						<div className="gap-y-5 flex flex-col">
							<span className="text-2xl font-semibold">Logo</span>
							{!file && (
								<label htmlFor="brand-logo">
									<input
										id="brand-logo"
										type="file"
										className="h-0 w-0 opacity-0 absolute"
										onChange={(e) => {
											if (e.target.files) {
												setFile(e.target.files[0]);
											}

											e.target.value = "";
										}}
									/>
									<div className="w-max bg-[#f5f5f5] rounded-full flex items-center justify-center gap-3 p-5">
										<PlusIcon fill="#1e1e1e" />
										<span className="text-2xl text-[#1e1e1e]">Upload file</span>
									</div>
								</label>
							)}
							{file && (
								<div className="p-6 h-[55px] bg-[#f5f5f5] rounded-2xl flex items-center justify-between">
									<span className="flex text-2xl truncate max-w-[130px]">
										{file.name}
									</span>
									<button onClick={() => setFile(null)}>
										<DeleteIcon />
									</button>
								</div>
							)}
						</div>

						<AppButton
							className="font-semibold"
							fullyRounded
							label={!isEditing ? "Create Brand" : "Edit Brand"}
							showLoading={!isValidating && isSubmitting}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
