"use client";
import React from "react";
import AdvertisersForCompetitiveReport from "./AdvertisersForCompetitiveReport";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";
import CampaignsForComplianceReport from "./CampaignsForComplianceReport";
import AllCompetitive from "./all-competitive-report/AllCompetitive";

export default function ReportsPageWrapper() {
	const { currentTab } = useReportStore();

	if (currentTab === "competitive") {
		return <AdvertisersForCompetitiveReport />;
	}

	if (currentTab === "compliance") {
		return <CampaignsForComplianceReport />;
	}

	if (currentTab === "all-competitive") {
		return (
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] mb-12">
				<AllCompetitive />
			</section>
		);
	}
}
