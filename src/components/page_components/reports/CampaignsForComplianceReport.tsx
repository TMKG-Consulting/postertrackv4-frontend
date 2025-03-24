"use client";
import React from "react";
import CampaignsTable from "../campaigns/CampaignsTable";

export default function CampaignsForComplianceReport() {
	return (
		<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] mb-12">
			<CampaignsTable forCompliance={true} />
		</section>
	);
}
