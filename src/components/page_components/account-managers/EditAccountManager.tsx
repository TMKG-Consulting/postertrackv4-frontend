"use client";
import React, { useState } from "react";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import { AccountManager } from "@/types";
import CreateAccountManagerForm from "./create/CreateAccountManagerForm";
import { useQueryClient } from "@tanstack/react-query";

export default function EditAccountManager({
	accountManager,
	currentPage,
}: {
	accountManager: AccountManager;
	currentPage: number;
}) {
	const { userDetails } = useRootStore();
	const queryClient = useQueryClient();

	const [showEdit, setShowEdit] = useState(false);

	if (!["SUPER_ADMIN", "CHIEF_ACCOUNT_MANAGER"].includes(userDetails?.role!)) {
		return;
	}

	return (
		<>
			<button
				type="button"
				onClick={() => setShowEdit(true)}
				className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
				<EditIcon />
				Edit Account Info
			</button>
			<Modal showModal={showEdit} hideModal={() => setShowEdit(false)}>
				<CreateAccountManagerForm
					initialValues={accountManager}
					isEditing
					editCallback={async (user) => {
						await queryClient.setQueryData(
							["accountManagers", currentPage],
							(prev) => {
								// @ts-ignore
								const data = { ...prev };
								const index = data.data.findIndex(
									// @ts-ignore
									(d) => d.id === user.id
								);

								console.log(index, user);

								data.data[index] = { ...data.data[index], ...user };

								return data;
							}
						);

						setShowEdit(false);

						await queryClient.refetchQueries({
							queryKey: ["accountManagers", currentPage],
							exact: true,
							refetchType: "none",
						});
					}}
				/>
			</Modal>
		</>
	);
}
