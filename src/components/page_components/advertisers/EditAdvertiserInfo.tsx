"use client";
import React, { useState } from "react";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import CreateFieldAuditorForm from "../field-auditors/create/CreateFieldAuditorForm";
import { Advertiser } from "@/types";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import CreateAdvertiserForm from "./create/CreateAdvertiserForm";

export default function EditAdvertiserInfo({
	advertiser,
}: {
	advertiser: Advertiser;
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
				Edit Advertiser Info
			</button>
			<Modal showModal={showEdit} hideModal={() => setShowEdit(false)}>
				<CreateAdvertiserForm initialValues={advertiser} isEditing />
			</Modal>
		</>
	);
}
