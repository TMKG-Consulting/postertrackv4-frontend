import CreateCampaignForm from "@/components/page_components/campaigns/create/CreateCampaignForm";
import React from "react";

export default function page() {
	return (
		<section className=" flex items-center justify-center h-screen">
			<div className="w-[60%] bg-white rounded-2xl border border-[#E2E2E2] p-12">
				<h1 className="text-[2.8rem] font-extrabold">Create New Campaign</h1>
				<CreateCampaignForm />
			</div>
		</section>
	);
}
