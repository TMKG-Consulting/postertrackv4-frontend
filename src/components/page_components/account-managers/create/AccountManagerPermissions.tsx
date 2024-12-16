"use client";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import React from "react";

export default function AccountManagerPermission() {
	return (
		<div className="w-full flex flex-col gap-y-5">
			<span className="text-2xl font-semibold">Permissions</span>
			<button className="h-max md:h-[50px] bg-[#F5F5F5] rounded-xl flex items-center flex-wrap p-3 gap-3">
				<button
					className="p-3 h-[34px] rounded-xl flex items-center gap-3 bg-[#E9E9E9] text-2xl"
					type="button">
					Create Field Auditor
					<CloseIcon />
				</button>
				<button
					className="p-3 h-[34px] rounded-xl flex items-center gap-3 bg-[#E9E9E9] text-2xl"
					type="button">
					Edit Field Auditor
					<CloseIcon />
				</button>
			</button>
		</div>
	);
}
