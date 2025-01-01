"use client";
import React from "react";
import Link from "next/link";
import AppButton from "@/components/shared/AppButton";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";

export default function ComplianceReportHeader() {
	return (
		<>
			<section className="w-full h-[15rem] md:h-[10rem] flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:justify-between">
				<div className="w-full flex items-center justify-between md:justify-start gap-5">
					<Link href="/reports">
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
						Compliance Report
					</h2>
				</div>
			</section>
			<section className="flex items-center py-8 gap-8 lg::mb-10">
				<span className="text-[1.7rem] font-medium">
					Total Sites: <span className="font-bold">250</span>
				</span>
				<span className="flex h-[24px] w-[1px] bg-appBlack"></span>
				<span className="text-[1.7rem] font-medium">
					Date Uploaded: <span className="font-bold">July 23,2024</span>
				</span>
				<span className="flex h-[24px] w-[1px] bg-appBlack"></span>
				<span className="text-[1.7rem] font-medium">
					Campaign ID: <span className="font-bold">AWDER5</span>
				</span>
			</section>
		</>
	);
}
