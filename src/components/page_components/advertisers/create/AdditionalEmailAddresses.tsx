"use client";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import React from "react";

export default function AdditionalEmailAddresses() {
	return (
		<div className="w-full flex flex-col gap-y-5">
			<span className="text-2xl font-semibold">Additional Email Addresses</span>
			<div className="h-max md:h-[50px] bg-[#F5F5F5] rounded-xl flex items-center flex-wrap p-3 gap-3">
				<button
					className="p-3 h-[34px] rounded-xl flex items-center gap-3 bg-[#E9E9E9] text-2xl"
					type="button">
					adams@email.com
					<CloseIcon />
				</button>
				<button
					className="p-3 h-[34px] rounded-xl flex items-center gap-3 bg-[#E9E9E9] text-2xl"
					type="button">
					adams@email.com
					<CloseIcon />
				</button>
				<input
					className="h-[34px] outline-none w-[150px] bg-transparent text-2xl"
					placeholder="Email Address"
					type="email"
				/>
			</div>
		</div>
	);
}
