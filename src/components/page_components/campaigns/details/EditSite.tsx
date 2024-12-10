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

export default function EditSite() {
	const [showEdit, setShowEdit] = useState(false);

	return (
		<>
			<button
				type="button"
				onClick={() => setShowEdit(true)}
				className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
				<EditIcon />
				Edit site
			</button>
			<Modal showModal={showEdit} hideModal={() => setShowEdit(false)}>
				<EditSiteForm />
			</Modal>
		</>
	);
}

const EditSiteForm = function () {
	return (
		<Formik initialValues={{ code: "" }} onSubmit={() => {}}>
			{() => (
				<Form className="w-full p-10">
					<div className="mb-12">
						<span className="font-black text-[28px]">Edit Site</span>
					</div>
					<div className="flex flex-col gap-y-10">
						<Dropdown
							items={["John Doe", "John Doe", "John Doe"]}
							renderButton={({ setOpen, open }) => (
								<div className="w-full flex flex-col gap-y-5">
									<span className="text-2xl font-semibold">Field Auditor</span>
									<button
										type="button"
										onClick={() => setOpen(!open)}
										className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
										<span className="text-2xl text-[#8D8D8D]">
											Select Auditor
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
						<div className="grid grid-cols-2 gap-5">
							<div className="w-full">
								<AppInput
									label="Audit Code"
									name="code"
									placeholder="Audit Code"
								/>
							</div>
							<div className="w-full">
								<Dropdown
									items={["John Doe", "John Doe", "John Doe"]}
									renderButton={({ setOpen, open }) => (
										<div className="w-full flex flex-col gap-y-5">
											<span className="text-2xl font-semibold">
												Media Owner
											</span>
											<button
												type="button"
												onClick={() => setOpen(!open)}
												className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
												<span className="text-2xl text-[#8D8D8D]">
													Select Media Owner
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
							</div>
						</div>
						<div className="grid grid-cols-2 gap-5">
							<div className="w-full">
								<Dropdown
									items={["John Doe", "John Doe", "John Doe"]}
									renderButton={({ setOpen, open }) => (
										<div className="w-full flex flex-col gap-y-5">
											<span className="text-2xl font-semibold">State</span>
											<button
												type="button"
												onClick={() => setOpen(!open)}
												className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
												<span className="text-2xl text-[#8D8D8D]">
													Select State
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
							</div>
							<div className="w-full">
								<Dropdown
									items={["John Doe", "John Doe", "John Doe"]}
									renderButton={({ setOpen, open }) => (
										<div className="w-full flex flex-col gap-y-5">
											<span className="text-2xl font-semibold">City</span>
											<button
												type="button"
												onClick={() => setOpen(!open)}
												className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
												<span className="text-2xl text-[#8D8D8D]">
													Select City
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
							</div>
						</div>
						<div className="w-full">
							<AppInput label="Address" name="code" placeholder="Address" />
						</div>
						<div className="grid grid-cols-2 gap-5">
							<div className="w-full">
								<Dropdown
									items={["John Doe", "John Doe", "John Doe"]}
									renderButton={({ setOpen, open }) => (
										<div className="w-full flex flex-col gap-y-5">
											<span className="text-2xl font-semibold">Brand</span>
											<button
												type="button"
												onClick={() => setOpen(!open)}
												className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
												<span className="text-2xl text-[#8D8D8D]">
													Select Brand
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
							</div>
							<div className="w-full">
								<AppInput
									label="Media Type"
									name="code"
									placeholder="Media Type"
								/>
							</div>
						</div>
						<div className="flex justify-center">
							<AppButton
								className="!w-[160px] font-medium"
								fullyRounded
								label="Save"
							/>
						</div>
					</div>
				</Form>
			)}
		</Formik>
	);
};
