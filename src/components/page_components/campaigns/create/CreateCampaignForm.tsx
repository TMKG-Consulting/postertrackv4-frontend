"use client";
import React, { useState } from "react";
import { Form, Formik, FormikHelpers } from "formik";
import FileUploadIcon from "@/components/shared/icons/FileUploadIcon";
import AppButton from "@/components/shared/AppButton";
import DuplicatesFound from "./DuplicatesFound";
import CampaignClient from "./CampaignClient";
import CampaignAccountManager from "./CampaignAccountManager";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import * as Yup from "yup";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { useRouter, useParams } from "next/navigation";
import FileIcon from "@/components/shared/icons/FileIcon";
import CloseIcon from "@/components/shared/icons/CloseIcon";

type CampaignFormProps = {
	forAddMore?: boolean;
};

interface CampaignCreationData {
	clientId: string;
	accountManagerId: string;
}

const schema = Yup.object().shape({
	clientId: Yup.string().required(),
	accountManagerId: Yup.string().required(),
});

const addMoreSchema = Yup.object().shape({
	clientId: Yup.string().optional(),
	accountManagerId: Yup.string().optional(),
});

export default function CreateCampaignForm({ forAddMore }: CampaignFormProps) {
	const [duplicatesFound, setDuplicatesFound] = useState(false);
	const { showAndHideAlert } = useAlert();
	const [siteList, setSiteList] = useState<File | null>(null);
	const { accessToken } = useCredentials();
	const router = useRouter();
	const params = useParams();
	const { campaignId } = params;

	const initialValues: CampaignCreationData = {
		clientId: "",
		accountManagerId: "",
	};

	const handleSubmit = async (
		values: CampaignCreationData,
		{ setSubmitting }: FormikHelpers<CampaignCreationData>
	) => {
		try {
			if (!siteList) {
				throw new AxiosError("Please upload campaign sitelist. ");
			}

			const formData = new FormData();

			formData.append("clientId", values.clientId);
			formData.append("accountManagerId", values.accountManagerId);
			formData.append("siteList", siteList, siteList.name);

			await ApiInstance.post("campaigns/create", formData, {
				headers: {
					"auth-token": accessToken,
				},
			});

			showAndHideAlert({
				message: "Campaign created successfully",
				type: "success",
			});
			setSubmitting(false);

			router.replace("/campaigns");
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				//@ts-ignore
				message: err?.response?.data?.error ?? err.message,
				type: "error",
			});
			setSubmitting(false);

			if (
				err &&
				// @ts-ignore
				err.response?.data.error === "Duplicate board locations found."
			) {
				setDuplicatesFound(true);
			}
		}
	};

	const handleAddMoreSubmit = async (
		values: CampaignCreationData,
		{ setSubmitting }: FormikHelpers<CampaignCreationData>
	) => {
		try {
			if (!campaignId) {
				throw new AxiosError("Campaign Id is missing!");
			}

			if (!siteList) {
				throw new AxiosError("Please upload campaign sitelist. ");
			}

			const formData = new FormData();

			formData.append("campaignId", campaignId as string);
			formData.append("siteList", siteList, siteList.name);

			await ApiInstance.post("sites/upload", formData, {
				headers: {
					"auth-token": accessToken,
				},
			});

			showAndHideAlert({
				message: "Site list added successfully",
				type: "success",
			});
			setSubmitting(false);

			router.replace("/campaigns");
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				//@ts-ignore
				message: err?.response?.data?.error ?? err.message,
				type: "error",
			});
			setSubmitting(false);

			if (
				err &&
				// @ts-ignore
				err.response?.data.error === "Duplicate board locations found."
			) {
				setDuplicatesFound(true);
			}
		}
	};

	const handleFilePick = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			const file = [...e.target.files][0];
			setSiteList(file);
			e.target.value = "";
		}
	};

	return (
		<div
			className={`w-full md:w-[85%] ${
				duplicatesFound ? "xl:w-[80%]" : "xl:w-[60%]"
			} bg-white rounded-2xl border border-[#E2E2E2]`}>
			<div className="p-5 md:p-12">
				<h1 className="text-[2.8rem] font-extrabold">
					{forAddMore ? "Add More Sites" : "Create New Campaign"}
				</h1>
			</div>
			<Formik
				validationSchema={!forAddMore ? schema : addMoreSchema}
				initialValues={initialValues}
				onSubmit={!forAddMore ? handleSubmit : handleAddMoreSubmit}>
				{({ isSubmitting, isValidating }) => (
					<>
						{duplicatesFound && <DuplicatesFound />}
						{!duplicatesFound && (
							<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
								{!forAddMore && (
									<>
										<CampaignClient />
										<CampaignAccountManager />
									</>
								)}
								{!siteList && (
									<label htmlFor="sitelist" className="flex flex-col gap-y-3">
										<span className="text-2xl font-semibold">Site list(s)</span>
										<div className="h-[202px] w-full border border-dashed border-[#8D8D8D] p-5 rounded-xl flex flex-col items-center justify-center gap-y-3 cursor-pointer">
											<FileUploadIcon />
											<span className="text-2xl font-medium">
												Click to upload or drag and drop
											</span>
											<span className="text-2xl text-[#9a9a9a]">
												Supported file formats are .xlsx, .xls
											</span>
										</div>
										<input
											accept="application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
											id="sitelist"
											type="file"
											className="hidden"
											onChange={handleFilePick}
										/>
									</label>
								)}
								{siteList && (
									<button
										type="button"
										onClick={() => setSiteList(null)}
										className="cursor-pointer flex flex-row items-center justify-between bg-[#f5f5f5] rounded-xl p-7">
										<div className="flex items-center gap-5">
											<FileIcon />
											<span className="text-2xl text-appBlack">
												{siteList.name}
											</span>
										</div>
										<CloseIcon fill="black" />
									</button>
								)}
								<AppButton
									className="font-semibold"
									fullyRounded
									label={forAddMore ? "Save" : "Create Campaign"}
									showLoading={!isValidating && isSubmitting}
								/>
							</Form>
						)}
					</>
				)}
			</Formik>
		</div>
	);
}
