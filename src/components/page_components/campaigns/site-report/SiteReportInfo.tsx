"use client";
import CheckedIcon from "@/components/shared/icons/CheckedIcon";
import React from "react";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import AppButton from "@/components/shared/AppButton";
import UpdateBSV from "./UpdateBSV";

export default function SiteReportInfo() {
	const { currentTab, reportBeingViewed } = useSiteStore();

	const isPending = reportBeingViewed?.status === "pending";
	const isApproved = reportBeingViewed?.status === "approved";
	const disapproved = reportBeingViewed?.status === "disapproved";

	return (
		<div className="w-full flex flex-col">
			{currentTab === "report" && (
				<>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Audit Code
						</span>
						<span className="text-appBlack text-2xl font-medium">
							{reportBeingViewed?.siteCode}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							State
						</span>
						<span className="text-appBlack text-2xl font-medium">{}</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							City
						</span>
						<span className="text-appBlack text-2xl font-medium">
							{reportBeingViewed?.city}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Brand
						</span>
						<span className="text-appBlack text-2xl font-medium">
							{reportBeingViewed?.brand}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Billboard
						</span>
						<span className="text-appBlack text-2xl font-medium">
							{reportBeingViewed?.boardType}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Structure
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.Structure.name.toLowerCase() === "ok" ? (
								<>
									Ok <CheckedIcon.Secondary />
								</>
							) : (
								reportBeingViewed?.Structure.name
							)}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Poster
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.Poster.name.toLowerCase() === "ok" ? (
								<>
									Ok <CheckedIcon.Secondary />
								</>
							) : (
								reportBeingViewed?.Poster.name
							)}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Illumination
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.Illumination.name}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Route
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.Route.name}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Side of Traffic
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.Side.name}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							BSV Score
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.bsv}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Comment
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.comment}
						</span>
					</div>
					<UpdateBSV />
				</>
			)}

			{currentTab === "details" && (
				<>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							field Auditor
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{/* {reportBeingViewed} */}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Status
						</span>
						<span
							className={`flex p-[5px] px-[10px] border-[1.5px] ${
								isPending ? "border-[#FF8617] text-[#FF8617]  bg-[#FFE3CA]" : ""
							} ${
								isApproved
									? "border-[#1b8e41] text-[#1b8e41]  bg-[#bbe7ca]"
									: ""
							}  ${
								disapproved
									? "border-[#e7352b] text-[#e7352b]  bg-[#e7c1bb]"
									: ""
							} rounded-full text-2xl items-center justify-center font-medium`}>
							{reportBeingViewed?.status}
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Media Owner
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							{reportBeingViewed?.mediaOwner}
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
				</>
			)}
		</div>
	);
}
