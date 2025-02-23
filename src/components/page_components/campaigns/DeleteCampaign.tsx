"use client";
import Link from "next/link";
import React, { useState } from "react";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import { Campaign } from "@/types";
import useAlert from "@/hooks/useAlert";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import Modal from "@/components/shared/Modal";

export default function DeleteCampaign({
	campaignId,
	asBtn = false,
}: {
	campaignId: number;
	asBtn?: boolean;
}) {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);
	const queryClient = useQueryClient();
	const { showAndHideAlert } = useAlert();
	const { accessToken } = useCredentials();
	const router = useRouter();

	const deleteCampaignHandler = async function () {
		try {
			setIsProcessing(true);
			await ApiInstance.delete("/campaigns/" + campaignId, {
				headers: {
					"auth-token": accessToken,
				},
			});
			setIsProcessing(false);
			showAndHideAlert({
				//@ts-ignore
				message: "Campaign deleted successfully!",
				type: "success",
			});

			await queryClient.refetchQueries({ queryKey: ["campaigns"] });
			if (asBtn) {
				router.replace("/campaigns");
			}
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				//@ts-ignore
				message: err?.response?.data?.error ?? err.message,
				type: "error",
			});
		}
	};

	return (
		<>
			<Modal showModal={isDeleting} hideModal={() => setIsDeleting(false)}>
				<div className="flex flex-col items-center justify-center p-[20px]">
					<h6 className="text-center text-[3rem] font-semibold">
						Are you sure you want to delete this campaign
					</h6>
					<div className="my-10 grid grid-cols-2 gap-5 w-full">
						<AppButton
							onClick={deleteCampaignHandler}
							showLoading={isProcessing}
							label="Delete"></AppButton>
						<AppButton
							label="Cancel"
							className="!bg-[#e4e4e4] !text-appBlack"
							onClick={() => setIsDeleting(false)}
							showLoading={isProcessing}></AppButton>
					</div>
				</div>
			</Modal>
			{asBtn ? (
				<AppButton
					className="!w-1/2 md:!w-[150px] !bg-transparent !text-primary border border-[#C2C2C2] font-medium"
					fullyRounded
					label="Delete Campaign"
					onClick={() => setIsDeleting(true)}
				/>
			) : (
				<button
					onClick={() => setIsDeleting(true)}
					className="w-full flex items-center gap-x-5 text-2xl py-3 text-primary">
					<DeleteIcon />
					{isDeleting ? "Deleting..." : "Delete Campaign"}
				</button>
			)}
		</>
	);
}
