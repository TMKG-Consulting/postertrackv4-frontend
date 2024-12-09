"use client";
import React from "react";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";

export default function SiteDetailsTab() {
	const { currentTab, setCurrentTab } = useSiteStore();

	return (
		<section className="py-8">
			<div className="border-b border-b-[#E0E0E0] w-full flex items-center gap-6">
				<button
					onClick={() => setCurrentTab("report")}
					className={`h-full p-[10px] border-b-[1.5px]  transition-all duration-300 ${
						currentTab === "report" ? "border-primary" : "border-transparent"
					}`}>
					<span
						className={`text-2xl ${
							currentTab === "report"
								? "text-primary font-bold"
								: "text-[#868686] font-medium"
						}`}>
						Site Report
					</span>
				</button>
				<button
					onClick={() => setCurrentTab("details")}
					className={`h-full p-[10px] border-b-[1.5px] transition-all duration-300 ${
						currentTab === "details" ? "border-primary" : "border-transparent"
					}`}>
					<span
						className={`text-2xl ${
							currentTab === "details"
								? "text-primary font-bold"
								: "text-[#868686] font-medium"
						}`}>
						Site Details
					</span>
				</button>
			</div>
		</section>
	);
}
