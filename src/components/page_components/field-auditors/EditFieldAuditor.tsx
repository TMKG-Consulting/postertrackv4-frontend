"use client";
import React, { useState } from "react";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";
import StatesCovered from "./create/StatesCovered";
import { FieldAuditor } from "@/types";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import CreateFieldAuditorForm from "./create/CreateFieldAuditorForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function EditFieldAuditor({
	fieldAuditor,
	currentPage,
}: {
	fieldAuditor: FieldAuditor;
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
				<CreateFieldAuditorForm
					initialValues={{
						...fieldAuditor,
						//@ts-ignore
						statesCovered: fieldAuditor.statesCovered.map((d) => d.id),
						phone: fieldAuditor.phone ?? "",
					}}
					isEditing
					editCallback={async (user) => {
						await queryClient.setQueryData(
							["fieldAuditors", currentPage],
							(prev) => {
								// @ts-ignore
								const data = { ...prev };
								const index = data.data.findIndex(
									// @ts-ignore
									(d) => d.id === user.id
								);

								console.log(index, user);

								data.data[index] = { ...data.data[index], ...user };
								console.log(data);

								return data;
							}
						);

						setShowEdit(false);

						await queryClient.refetchQueries({
							queryKey: ["fieldAuditors", currentPage],
							exact: true,
							refetchType: "none",
						});
					}}
				/>
			</Modal>
		</>
	);
}
