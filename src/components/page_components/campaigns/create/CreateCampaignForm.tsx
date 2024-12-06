"use client";
import React from "react";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import FileUploadIcon from "@/components/shared/icons/FileUploadIcon";
import AppButton from "@/components/shared/AppButton";
import DuplicatesFound from "./DuplicatesFound";

export default function CreateCampaignForm() {
	return (
		<div className="w-full md:w-[85%] xl:w-[60%] bg-white rounded-2xl border border-[#E2E2E2]">
			<div className="p-5 md:p-12">
				<h1 className="text-[2.8rem] font-extrabold">Create New Campaign</h1>
			</div>

			<Formik initialValues={{}} onSubmit={() => {}}>
				{() => (
					// <DuplicatesFound />
					<Form className="w-full flex flex-col gap-y-10 mt-8 px-12 pb-12">
						<Dropdown
							items={["ABC Limited", "ABC Limited", "ABC Limited"]}
							renderButton={({ setOpen, open }) => (
								<div className="w-full flex flex-col gap-y-3">
									<span className="text-2xl font-semibold">Client</span>
									<button
										type="button"
										onClick={() => setOpen(!open)}
										className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
										<span className="text-2xl text-[#8D8D8D]">
											Select Client
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
						<Dropdown
							items={["John Doe", "John Doe", "John Doe"]}
							renderButton={({ setOpen, open }) => (
								<div className="w-full flex flex-col gap-y-3">
									<span className="text-2xl font-semibold">
										Account Manager
									</span>
									<button
										type="button"
										onClick={() => setOpen(!open)}
										className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
										<span className="text-2xl text-[#8D8D8D]">
											Select Manager
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
						<div className="flex flex-col gap-y-3">
							<span className="text-2xl font-semibold">Site list(s)</span>
							<div className="h-[202px] w-full border border-dashed border-[#8D8D8D] p-5 rounded-xl flex flex-col items-center justify-center gap-y-3 cursor-pointer">
								<FileUploadIcon />
								<span className="text-2xl font-medium">
									Click to upload or drag and drop
								</span>
								<span className="text-2xl text-[#9a9a9a]">
									Supported file formats are xlsx, xsc
								</span>
							</div>
						</div>
						<AppButton
							className="!font-medium"
							fullyRounded
							label="Create Campaign"
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
