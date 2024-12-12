"use client";
import React, { useState } from "react";
import Link from "next/link";
import EditIcon from "@/components/shared/icons/EditIcon";
import Modal from "@/components/shared/Modal";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppInput from "@/components/shared/AppInput";
import AppButton from "@/components/shared/AppButton";
import AdditionalEmailAddresses from "./create/AdditionalEmailAddresses";

export default function EditAdvertiserInfo() {
	const [showEdit, setShowEdit] = useState(false);

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
				<EditSiteForm />
			</Modal>
		</>
	);
}

const EditSiteForm = function () {
	return (
		<Formik initialValues={{ name: "" }} onSubmit={() => {}}>
			{() => (
				<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
					<div className="grid md:grid-cols-2 gap-10">
						<div className="w-full">
							<AppInput
								label="Name"
								name="name"
								placeholder="Advertiser name"
							/>
						</div>
						<div className="w-full">
							<AppInput label="Address" name="name" placeholder="Address" />
						</div>
					</div>
					<div className="grid md:grid-cols-2 gap-10">
						<div className="w-full">
							<AppInput
								label="Contact Email"
								name="name"
								placeholder="Contact Email"
							/>
						</div>
						<div className="w-full">
							<AppInput
								label="Contact Phone"
								name="name"
								placeholder="Contact Phone"
							/>
						</div>
					</div>
					<AdditionalEmailAddresses />
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
						renderButton={({ setOpen, open }) => (
							<div className="w-full flex flex-col gap-y-5">
								<span className="text-2xl font-semibold">Industry</span>
								<button
									type="button"
									onClick={() => setOpen(!open)}
									className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
									<span className="text-2xl text-[#8D8D8D]">
										Select Industry
									</span>
									<ChevronIcon fill={"#8D8D8D"} />
								</button>
							</div>
						)}
						renderItem={({ item, index }) => (
							<button
								key={index}
								className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0"
								type="button">
								{item}
							</button>
						)}
					/>
					<AppButton className="font-semibold" fullyRounded label={"Update"} />
				</Form>
			)}
		</Formik>
	);
};
