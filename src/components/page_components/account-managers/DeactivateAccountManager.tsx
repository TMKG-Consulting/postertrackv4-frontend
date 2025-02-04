"use client";
import DeactivateIcon from "@/components/shared/icons/DeactivateIcon";
import React, { useState } from "react";
import useUserManagement from "@/hooks/useUserManagement";
import useAlert from "@/hooks/useAlert";
import { AccountManager } from "@/types";
import { AxiosError } from "axios";
import Switch from "@/components/shared/Switch";
import { useQueryClient } from "@tanstack/react-query";

export default function DeactivateAccountManager({
	userId,
	user,
	asSwitch,
}: {
	userId: number;
	user: AccountManager;
	asSwitch?: boolean;
}) {
	const { updateUser } = useUserManagement();
	const { showAndHideAlert } = useAlert();
	const [currentStatus, setCurrentStatus] = useState(user.status);

	const queryClient = useQueryClient();

	async function deactivate(status: boolean) {
		const lastStatus = currentStatus;

		try {
			if (currentStatus) {
				setCurrentStatus(false);
			} else {
				setCurrentStatus(true);
			}
			await updateUser(userId, {
				...user,
				status,
			});

			showAndHideAlert({
				message: "User updated successfully.",
				type: "success",
			});

			queryClient.refetchQueries({ queryKey: ["accountManagers"] });
		} catch (error) {
			const err = error as AxiosError;
			console.log(err);

			showAndHideAlert({
				//@ts-ignore
				message: err?.response?.data?.error,
				type: "error",
			});
			setCurrentStatus(lastStatus);
		}
	}

	if (asSwitch) {
		return (
			<Switch
				onClick={() => {
					if (currentStatus) {
						deactivate(false);
					} else {
						deactivate(true);
					}
				}}
				isOn={currentStatus!}
			/>
		);
	}

	return (
		<button
			type="button"
			onClick={() => {
				if (currentStatus) {
					deactivate(false);
				} else {
					deactivate(true);
				}
			}}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<DeactivateIcon fill={currentStatus ? "#ED3237" : "green"} />
			{currentStatus ? "Deactivate" : "Activate"}
		</button>
	);
}
