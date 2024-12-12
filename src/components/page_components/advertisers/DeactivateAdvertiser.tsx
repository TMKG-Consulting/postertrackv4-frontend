"use client";
import DeactivateIcon from "@/components/shared/icons/DeactivateIcon";
import React from "react";

export default function DeactivateAdvertiser() {
	return (
		<button
			type="button"
			onClick={() => {}}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<DeactivateIcon />
			Deactivate
		</button>
	);
}
