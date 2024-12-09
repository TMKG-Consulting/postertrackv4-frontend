"use client";
import CheckedIcon from "@/components/shared/icons/CheckedIcon";
import React from "react";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";

export default function SiteReportInfo() {
	const { currentTab } = useSiteStore();

	return (
		<div className="w-full flex flex-col">
			{currentTab === "report" && (
				<>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Audit Code
						</span>
						<span className="text-appBlack text-2xl font-medium">2018</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							State
						</span>
						<span className="text-appBlack text-2xl font-medium">Lagos</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							City
						</span>
						<span className="text-appBlack text-2xl font-medium">Ikeja</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Brand
						</span>
						<span className="text-appBlack text-2xl font-medium">9 Mobile</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Billboard
						</span>
						<span className="text-appBlack text-2xl font-medium">Backlit</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Structure
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Ok <CheckedIcon.Secondary />
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Poster
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Ok <CheckedIcon.Secondary />
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Illumination
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Backlit
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Route
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							B
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Side of Traffic
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Right
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							BSV Score
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							77%
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Comment
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Ok
						</span>
					</div>
				</>
			)}

			{currentTab === "details" && (
				<>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							field Auditor
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							John Doe
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Status
						</span>
						<span className="w-[100px] flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
							Pending
						</span>
					</div>
					<div className="w-full flex items-center justify-between py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Media Owner
						</span>
						<span className="text-appBlack text-2xl font-medium flex items-center gap-2">
							Invent Media
						</span>
					</div>
					<div className="w-full flex flex-col justify-between gap-y-3 py-6 border-b border-b-[#dfdfdf]">
						<span className=" font-medium text-2xl w-max flex text-[#797979]">
							Address
						</span>
						<span className="w-full text-appBlack text-2xl font-medium flex items-center gap-2">
							Along adeniran ogunsanya street surulere ftt bode thomas and
							shoprite
						</span>
					</div>
				</>
			)}
		</div>
	);
}
