"use client";
import React from "react";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";
import { getHumanReadableAddress } from "@/utils";

export default function CompetitiveReportSiteInfo() {
	const { reportBeingViewed } = useReportStore();

	return (
		<div className="w-full flex flex-col">
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					Advertiser
				</span>
				<span className="text-appBlack text-2xl font-medium">
					{reportBeingViewed?.advertiser.name}
				</span>
			</div>
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					State
				</span>
				<span className="text-appBlack text-2xl font-medium">
					{reportBeingViewed?.state.name}
				</span>
			</div>
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					City
				</span>
				<span className="text-appBlack text-2xl font-medium">
					{reportBeingViewed?.city.name}
				</span>
			</div>
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					Brand
				</span>
				<span className="text-appBlack text-2xl font-medium">
					{reportBeingViewed?.brand.name}
				</span>
			</div>
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					Category
				</span>
				<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
					{reportBeingViewed?.category.name}
				</span>
			</div>
			<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					Region
				</span>
				<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
					{reportBeingViewed?.region.name}
				</span>
			</div>
			<div className="w-full flex flex-col justify-between gap-y-3 py-6 border-b border-b-[#dfdfdf]">
				<span className=" font-medium text-2xl w-max flex text-[#797979]">
					Address
				</span>
				<span className="w-full text-appBlack text-2xl font-medium flex items-center gap-2">
					{reportBeingViewed?.address}
				</span>
			</div>
		</div>
	);
}
