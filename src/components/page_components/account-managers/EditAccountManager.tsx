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

export default function EditAccountManager({
	accountManager,
}: {
	accountManager: AccountManager;
}) {
	const { userDetails } = useRootStore();

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
				<CreateAccountManagerForm initialValues={accountManager} isEditing />
			</Modal>
		</>
	);
}
