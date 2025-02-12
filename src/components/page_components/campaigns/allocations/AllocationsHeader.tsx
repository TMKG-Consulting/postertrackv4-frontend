"use client";
import AppButton from "@/components/shared/AppButton";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import Link from "next/link";
import React from "react";

export default function AllocationsHeader() {
	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2rem] md:text-[3rem] font-black">
				Campaign Allocations
			</h4>
			<div className="flex items-center justify-center gap-5">
				<div className="w-[150px] md:w-[200px]">
					<Link href={"/campaigns/create"}>
						<AppButton fullyRounded>
							<div className="flex items-center gap-x-2 md:gap-x-5">
								<PlusIcon />
								<span className="md:text-[1.7rem] font-medium">
									New Campaign
								</span>
							</div>
						</AppButton>
					</Link>
				</div>
				<div className="w-[150px] md:w-[200px]">
					<Link href={"/campaigns"}>
						<AppButton
							className="!bg-transparent border-[1.5px] border-primary"
							fullyRounded>
							<div className="flex items-center gap-x-2 md:gap-x-5">
								<span className="md:text-[1.7rem] font-medium text-primary">
									All Campaigns
								</span>
							</div>
						</AppButton>
					</Link>
				</div>
			</div>
		</section>
	);
}
