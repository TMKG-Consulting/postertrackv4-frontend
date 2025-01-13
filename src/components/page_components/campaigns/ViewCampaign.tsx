"use client";
import Link from "next/link";
import React from "react";
import EyeIcon from "@/components/shared/icons/EyeIcon";

export default function ViewCampaign({
	campaignId,
}: {
	campaignId: string | number;
}) {
	return (
		<Link
			href={"/campaigns/details/" + campaignId}
			className="w-full flex items-center gap-x-5 text-2xl py-3 border-b-[#E3E3E3] border-b">
			<EyeIcon.Visible width={18} height={17} />
			View Campaign
		</Link>
	);
}
