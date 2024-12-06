import React from "react";
import Link from "next/link";
import EditIcon from "@/components/shared/icons/EditIcon";

export default function EditSite() {
	return (
		<Link
			href={"/campaigns/details/fhfhf"}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<EditIcon />
			Edit site
		</Link>
	);
}
