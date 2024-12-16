"use client";
import React from "react";
import { Form, Formik } from "formik";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import AppButton from "@/components/shared/AppButton";
import AppInput from "@/components/shared/AppInput";
import StatesCovered from "./StatesCovered";

export default function CreateFieldAuditorForm() {
	return (
		<div className="w-full md:w-[85%] xl:w-[60%] bg-white rounded-2xl border border-[#E2E2E2]">
			<div className="p-5 md:p-12">
				<h1 className="text-[2.8rem] font-extrabold">Add Field Auditor</h1>
			</div>

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
								<AppInput
									label="Last Name"
									name="name"
									placeholder="Last Name"
								/>
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
							renderButton={({ setOpen, open }) => <StatesCovered />}
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
		</div>
	);
}
