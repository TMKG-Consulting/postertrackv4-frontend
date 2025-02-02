import CampaignDetailsHeader from "@/components/page_components/campaigns/details/CampaignDetailsHeader";
import React from "react";
import CampaignSiteListTable from "@/components/page_components/campaigns/details/CampaignSiteListTable";
import { ApiInstance } from "@/utils";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/constants";

export default async function page({
	params,
}: {
	params: Promise<{ campaignId: string }>;
}) {
	const cookieStore = await cookies();
	let campaignDetails = null;
	const campaignId = (await params).campaignId;

	if (cookieStore.has(ACCESS_TOKEN_COOKIE_NAME)) {
		try {
			const response = await ApiInstance.get(`/campaigns/${campaignId}`, {
				headers: {
					"auth-token": cookieStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
				},
			});
			campaignDetails = response.data.campaign;
		} catch (error) {
			// @ts-ignore
			if (error.response.status === 404) {
				throw new Error("Campaign not found");
			}

			// @ts-ignore
			if (error.response.status === 403) {
				throw new Error("You are not allowed to view this campaign");
			}

			throw error;
		}
	}

	return (
		<>
			<CampaignDetailsHeader campaign={campaignDetails} />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<CampaignSiteListTable campaign={campaignDetails} />
			</section>
		</>
	);
}
