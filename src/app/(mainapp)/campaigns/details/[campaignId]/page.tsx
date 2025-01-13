import CampaignDetailsHeader from "@/components/page_components/campaigns/details/CampaignDetailsHeader";
import React from "react";
import CampaignSiteListTable from "@/components/page_components/campaigns/details/CampaignSiteListTable";
import { ApiInstance } from "@/utils";
import { cookies } from "next/headers";

export default async function page() {
	const campaignDetails = {};

	return (
		<>
			<CampaignDetailsHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<CampaignSiteListTable />
			</section>
		</>
	);
}
