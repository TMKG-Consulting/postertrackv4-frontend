import CampaignHeader from "@/components/page_components/campaigns/CampaignHeader";
import CampaignsTable from "@/components/page_components/campaigns/CampaignsTable";
import React from "react";

export default function page() {
	return (
		<>
			<CampaignHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] h-[70vh] max-h-[70vh]">
				<CampaignsTable />
			</section>
		</>
	);
}
