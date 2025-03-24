"use client";
import React from "react";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";

export default function ReportsTab() {
	const { currentTab, setCurrentTab } = useReportStore();

	return (
		<section className="py-8">
			<div className="border-b border-b-[#E0E0E0] w-full flex items-center gap-6">
				<button
					onClick={() => setCurrentTab("competitive")}
					className={`h-full p-[10px] border-b-[1.5px]  transition-all duration-300 ${
						currentTab === "competitive"
							? "border-primary"
							: "border-transparent"
					}`}>
					<span
						className={`text-2xl ${
							currentTab === "competitive"
								? "text-primary font-bold"
								: "text-[#868686] font-medium"
						}`}>
						Competitive Report
					</span>
				</button>
				<button
					onClick={() => setCurrentTab("compliance")}
					className={`h-full p-[10px] border-b-[1.5px] transition-all duration-300 ${
						currentTab === "compliance"
							? "border-primary"
							: "border-transparent"
					}`}>
					<span
						className={`text-2xl ${
							currentTab === "compliance"
								? "text-primary font-bold"
								: "text-[#868686] font-medium"
						}`}>
						Compliance Report
					</span>
				</button>
				<button
					onClick={() => setCurrentTab("all-competitive")}
					className={`h-full p-[10px] border-b-[1.5px] transition-all duration-300 ${
						currentTab === "all-competitive"
							? "border-primary"
							: "border-transparent"
					}`}>
					<span
						className={`text-2xl ${
							currentTab === "all-competitive"
								? "text-primary font-bold"
								: "text-[#868686] font-medium"
						}`}>
						All Competitive Reports
					</span>
				</button>
			</div>
		</section>
	);
}
