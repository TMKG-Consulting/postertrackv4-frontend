"use client";
import AppButton from "@/components/shared/AppButton";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import Link from "next/link";
import React from "react";

export default function CampaignHeader() {
	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2.5rem] md:text-[3rem] font-black">All Campaigns</h4>
			<div className="w-[200px]">
				<Link href={"/campaigns/create"}>
					<AppButton fullyRounded>
						<div className="flex items-center gap-x-5">
							<PlusIcon />
							<span className="text-[1.7rem] font-medium">New Campaign</span>
						</div>
					</AppButton>
				</Link>
			</div>
		</section>
	);
}
