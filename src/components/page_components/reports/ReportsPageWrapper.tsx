"use client";
import React from "react";
import AdvertisersForCompetitiveReport from "./AdvertisersForCompetitiveReport";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";
import CampaignsForComplianceReport from "./CampaignsForComplianceReport";

export default function ReportsPageWrapper() {
	const { currentTab } = useReportStore();

	if (currentTab === "competitive") {
		return <AdvertisersForCompetitiveReport />;
	}

	if (currentTab === "compliance") {
		return <CampaignsForComplianceReport />;
	}
}
