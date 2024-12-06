"use client";
import Link from "next/link";
import React from "react";
import PlusIcon from "@/components/shared/icons/PlusIcon";

export default function AddMoreSites() {
	return (
		<Link
			href={"/campaigns/details/fhfhf"}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<PlusIcon fill="black" />
			Add more sites
		</Link>
	);
}
