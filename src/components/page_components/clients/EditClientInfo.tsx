"use client";
import React, { useState } from "react";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import { useRootStore } from "@/components/shared/providers/RootProvider";
import CreateClientForm from "./create/CreateClientForm";
import { Client } from "@/types";

export default function EditClientInfo({ client }: { client: Client }) {
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
				Edit Client Info
			</button>
			<Modal showModal={showEdit} hideModal={() => setShowEdit(false)}>
				<CreateClientForm initialValues={client} isEditing />
			</Modal>
		</>
	);
}
