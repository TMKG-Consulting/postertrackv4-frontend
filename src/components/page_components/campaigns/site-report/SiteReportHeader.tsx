"use client";
import React, { useState } from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import useAlert from "@/hooks/useAlert";
import { AxiosError } from "axios";
import MarkIcon from "@/components/shared/icons/MarkIcon";
import CautionIcon from "@/components/shared/icons/CautionIcon";
import Modal from "@/components/shared/Modal";
import { Form, Formik } from "formik";
import AppInput from "@/components/shared/AppInput";

export default function SiteReportHeader() {
	const { reportBeingViewed, setReportBeingViewed } = useSiteStore();
	const { accessToken } = useCredentials();
	const { showAndHideAlert } = useAlert();
	const [isApproving, setIsApproving] = useState(false);
	const [isDisapproving, setIsDisapproving] = useState(false);

	const updateSiteStatus = async function (
		status: "approved" | "disapproved",
		disapprovalReason?: string
	) {
		try {
			if (status === "approved") {
				setIsApproving(true);
			}

			const response = await ApiInstance.put(
				`compliance/${reportBeingViewed?.id}/status`,
				{
					status,
					disapprovalReason,
				},
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			if (status === "approved") {
				setIsApproving(false);
			}

			if (reportBeingViewed) {
				setReportBeingViewed({ ...reportBeingViewed, status });
			}

			showAndHideAlert({ message: response.data.message, type: "success" });
		} catch (error) {
			const err = error as AxiosError<any>;
			showAndHideAlert({
				message:
					err.response?.data.message ??
					err.response?.data.error ??
					"An error occurred",
				type: "error",
			});

			if (status === "approved") {
				setIsApproving(false);
			}
		}
	};

	return (
		<section className="w-full h-[15rem] md:h-[10rem] flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:justify-between border-b border-b-[#C7C7C7">
			<div className="w-full flex items-center justify-between md:justify-start gap-5">
				<Link href={"/campaigns/details/" + reportBeingViewed?.campaignId}>
					<AppButton
						fullyRounded
						className="!w-[82px] !h-[39px] gap-x-3 !bg-transparent border-appBlack border-[1.5px]">
						<span className="flex rotate-[90deg]">
							<ChevronIcon fill="#1e1e1e" />
						</span>
						<span className="text-appBlack">Back</span>
					</AppButton>
				</Link>
				<h2 className="text-[2rem] lg:text-[2.4rem] xl:text-[28px] font-black">
					Audit Code: {reportBeingViewed?.siteCode}
				</h2>
			</div>
			<div className="w-full md:w-max flex items-center gap-3 md:gap-5">
				{reportBeingViewed?.status === "approved" && (
					<div className="cursor-none flex items-center gap-5 rounded-full p-5 bg-[#048F2B]">
						<span className="text-2xl font-medium text-white">Approved</span>{" "}
						<MarkIcon fill="white" />
					</div>
				)}
				{(reportBeingViewed?.status === "pending" ||
					reportBeingViewed?.status === "disapproved") && (
					<AppButton
						onClick={() => updateSiteStatus("approved")}
						className="!w-1/2 md:!w-[150px] font-medium !bg-[#048F2B24] border-[#048F2B] border-[1.5px] !text-[#048F2B]"
						fullyRounded
						label="Approve"
						showLoading={isApproving}
					/>
				)}

				{(reportBeingViewed?.status === "pending" ||
					reportBeingViewed?.status === "approved") && (
					<AppButton
						onClick={() => setIsDisapproving(true)}
						className="!w-1/2 md:!w-[150px] !bg-[#EB410B24] !text-primary border-primary border-[1.5px] font-medium"
						fullyRounded
						label="Disapprove"
					/>
				)}
				{reportBeingViewed?.status === "disapproved" && (
					<div className="cursor-none flex items-center gap-5 rounded-full p-5 bg-[#ED323740]">
						<span className="text-2xl font-medium text-appBlack">
							Disapproved
						</span>{" "}
						<CautionIcon fill="#ED3237" />
					</div>
				)}
			</div>
			<Modal
				showModal={isDisapproving}
				hideModal={() => setIsDisapproving(false)}>
				<Formik
					initialValues={{ disapprovalReason: "" }}
					onSubmit={async (values, { setSubmitting }) => {
						await updateSiteStatus("disapproved", values.disapprovalReason);
						setSubmitting(false);
						setIsDisapproving(false);
					}}>
					{({ isSubmitting }) => (
						<Form className="p-10">
							<AppInput
								name="disapprovalReason"
								label="State your reason for disaproval"
								placeholder="Disapproval Reason"
							/>
							<AppButton
								type="submit"
								label="Disapprove"
								showLoading={isSubmitting}
								className="mt-[20px]"
							/>
						</Form>
					)}
				</Formik>
			</Modal>
		</section>
	);
}
