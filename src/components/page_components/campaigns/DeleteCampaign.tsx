"use client";
import Link from "next/link";
import React from "react";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";

export default function DeleteCampaign() {
	return (
		<Link
			href={"/campaigns/details/fhfhf"}
			className="w-full flex items-center gap-x-5 text-2xl py-3 text-primary">
			<DeleteIcon />
			Delete Campaign
		</Link>
	);
}
