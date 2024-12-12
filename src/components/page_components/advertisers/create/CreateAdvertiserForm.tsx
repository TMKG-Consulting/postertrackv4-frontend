"use client";
import React from "react";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import AdditionalEmailAddresses from "./AdditionalEmailAddresses";

type CampaignFormProps = {
	forAddMore?: boolean;
};
export default function CreateAdvertiserForm({
	forAddMore,
}: CampaignFormProps) {
	return (
		<div className="w-full md:w-[85%] xl:w-[60%] bg-white rounded-2xl border border-[#E2E2E2]">
			<div className="p-5 md:p-12">
				<h1 className="text-[2.8rem] font-extrabold">Add New Advertiser</h1>
			</div>

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
						<AppButton
							className="font-semibold"
							fullyRounded
							label={"Create Advertiser"}
						/>
					</Form>
				)}
			</Formik>
		</div>
	);
}
