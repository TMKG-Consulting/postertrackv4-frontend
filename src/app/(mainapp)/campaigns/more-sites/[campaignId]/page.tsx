import React from "react";
import CreateCampaignForm from "@/components/page_components/campaigns/create/CreateCampaignForm";

export default function page() {
	return (
		<section className="flex items-center justify-center min-h-screen py-12 xl:py-0">
			<CreateCampaignForm forAddMore />
		</section>
	);
}
