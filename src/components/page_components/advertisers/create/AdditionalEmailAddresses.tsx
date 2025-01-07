"use client";
import AppButton from "@/components/shared/AppButton";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import { Field, Formik } from "formik";
import React, { useState } from "react";

interface AdditionalEmailProps {
	emails: string[];
	addEmail: (email: string) => void;
	removeEmail: (index: number) => void;
}

export default function AdditionalEmailAddresses({
	emails,
	addEmail,
	removeEmail,
}: AdditionalEmailProps) {
	const [email, setEmail] = useState("");

	return (
		<div className="w-full flex flex-col gap-y-5">
			<span className="text-2xl font-semibold">
				Additional Email Addresses (optional)
			</span>
			{emails.length < 2 && (
				<div className="flex items-center justify-between w-full gap-7">
					<input
						className="h-[50px] outline-none grow shrink-0 bg-[#F5F5F5] rounded-xl text-2xl p-6"
						placeholder="Email Address"
						type="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<AppButton
						onClick={() => {
							if (email === "") {
								return;
							}

							addEmail(email);
							setEmail("");
						}}
						type="button"
						fullyRounded={false}
						showLoading={false}
						className="!w-[150px] !h-[50px]"
						label="Add Email"
					/>
				</div>
			)}
			{emails.length > 0 && (
				<div className="h-max 2xl:h-[50px] bg-[#F5F5F5] rounded-xl flex items-center flex-wrap p-3 gap-3">
					{emails.map((e, index) => (
						<button
							key={index}
							onClick={() => removeEmail(index)}
							className="p-3 h-[34px] rounded-xl flex items-center gap-3 bg-[#E9E9E9] text-2xl"
							type="button">
							{e}
							<CloseIcon />
						</button>
					))}
				</div>
			)}
		</div>
	);
}
