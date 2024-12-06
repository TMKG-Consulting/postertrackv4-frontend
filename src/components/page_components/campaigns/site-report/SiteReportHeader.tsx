import React from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";

export default function SiteReportHeader() {
	return (
		<section className="w-full h-[15rem] md:h-[10rem] flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:justify-between border-b border-b-[#C7C7C7">
			<div className="w-full flex items-center justify-between md:justify-start gap-5">
				<Link href="/campaigns">
					<AppButton
						fullyRounded
						className="!w-[82px] !h-[39px] gap-x-3 !bg-transparent border-appBlack border-[1.5px]">
						<span className="flex rotate-[90deg]">
							<ChevronIcon fill="#1e1e1e" />
						</span>
						<span className="text-appBlack">Back</span>
					</AppButton>
				</Link>
				<h2 className="text-[2rem] lg:text-[2.4rem] xl:text-[28px] font-black">
					Audit Code: 2813
				</h2>
			</div>
			<div className="w-full md:w-max flex items-center gap-3 md:gap-5">
				<AppButton
					className="!w-1/2 md:!w-[150px] font-medium !bg-[#048F2B24] border-[#048F2B] border-[1.5px] !text-[#048F2B]"
					fullyRounded
					label="Approve"
				/>
				<AppButton
					className="!w-1/2 md:!w-[150px] !bg-[#EB410B24] !text-primary border-primary border-[1.5px] font-medium"
					fullyRounded
					label="Disapprove"
				/>
			</div>
		</section>
	);
}
