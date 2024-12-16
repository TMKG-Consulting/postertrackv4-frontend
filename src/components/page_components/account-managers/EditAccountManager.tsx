"use client";
import React, { useState } from "react";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";
import AccountManagerPermission from "./create/AccountManagerPermissions";

export default function EditAccountManager() {
	const [showEdit, setShowEdit] = useState(false);

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
				<EditAccountManagerForm />
			</Modal>
		</>
	);
}

const EditAccountManagerForm = function () {
	return (
		<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
			{() => (
				<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
					<div className="grid md:grid-cols-2 gap-10">
						<div className="w-full">
							<AppInput
								label="First Name"
								name="name"
								placeholder="First Name"
							/>
						</div>
						<div className="w-full">
							<AppInput label="Last Name" name="name" placeholder="Last Name" />
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-10">
						<div className="w-full">
							<AppInput
								label="Email Address"
								name="name"
								placeholder="Email Address"
							/>
						</div>
						<div className="w-full">
							<AppInput
								label="Phone Number"
								name="name"
								placeholder="Phone Number"
							/>
						</div>
					</div>
					<div className="w-full">
						<AppInput label="Address" name="name" placeholder="Address" />
					</div>
					<Dropdown
						top={-100}
						items={[
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
							"ABC Limited",
						]}
						renderButton={({ setOpen, open }) => <AccountManagerPermission />}
						renderItem={({ item, index }) => (
							<button
								key={index}
								className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0"
								type="button">
								{item}
							</button>
						)}
					/>
					<AppButton
						className="font-semibold"
						fullyRounded
						label={"Create Account Manager"}
					/>
				</Form>
			)}
		</Formik>
	);
};
