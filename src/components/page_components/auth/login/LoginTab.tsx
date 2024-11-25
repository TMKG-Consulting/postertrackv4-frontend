"use client";
import React from "react";
import AppButton from "@/components/shared/AppButton";

export default function LoginTab() {
	return (
		<div className="bg-[#ED323729] w-[208px] h-[50px] rounded-[10px] px-[7px] grid grid-cols-2">
			<div className="w-full h-full flex items-center">
				<AppButton
					label="Admin"
					className="!h-[36px] !text-[1.7rem] font-semibold !rounded-lg"
				/>
			</div>
			<div className="w-full h-full flex items-center">
				<AppButton
					label="Client"
					className="!bg-transparent !h-[36px] !text-[1.7rem] font-semibold !text-primary !rounded-lg"
				/>
			</div>
		</div>
	);
}
