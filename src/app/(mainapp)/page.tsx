import DashboardHeader from "@/components/page_components/dashboard/DashboardHeader";
import PendingSiteUploads from "@/components/page_components/dashboard/PendingSiteUploads";
import ClientsIcon from "@/components/shared/icons/ClientsIcon";
import AdvertisersIcon from "@/components/shared/icons/AdvertisersIcon";
import Link from "next/link";
import React from "react";
import TotalSitesIcon from "@/components/shared/icons/TotalSitesIcon";
import TotalCampaignsIcon from "@/components/shared/icons/TotalCampaignsIcon";
import { ApiInstance } from "@/utils";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/constants";

export default async function page() {
	const cookieStore = await cookies();
	let analytics = {
		totalClients: 0,
		totalBrands: 0,
		totalAdvertisers: 0,
		totalFieldAuditors: 0,
		totalSites: 0,
		totalCampaigns: 0,
	};
	
	if (cookieStore.has(ACCESS_TOKEN_COOKIE_NAME)) {
		const res = await ApiInstance.get("/analytics/overview", {
			headers: {
				"auth-token": cookieStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
			},
		});

		analytics = res.data;
	}

	return (
		<>
			<DashboardHeader />
			<section className="grid md:grid-cols-3 gap-10 mt-10">
				<Link
					href={"/clients"}
					className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalClients}
					</span>
				</Link>
				<Link
					href={"/brands"}
					className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Brands
						</span>
						<ClientsIcon fill="#3632ED" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalBrands}
					</span>
				</Link>
				<Link
					href={"/advertisers"}
					className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Advertisers
						</span>
						<ClientsIcon fill="#139B9B" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalAdvertisers}
					</span>
				</Link>
				<Link
					href={"/field-auditors"}
					className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Field Auditors
						</span>
						<ClientsIcon fill="#ED3D05" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalFieldAuditors}
					</span>
				</Link>
				<Link href={""} className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Total Sites
						</span>
						<TotalSitesIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalSites}
					</span>
				</Link>
				<Link
					href={"/campaigns"}
					className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Campaigns
						</span>
						<TotalCampaignsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">
						{analytics.totalCampaigns}
					</span>
				</Link>
			</section>
			<section className="rounded-2xl bg-white my-12">
				<div className="w-full p-10 flex items-center justify-between">
					<h5 className="text-[1.7rem] md:text-[2.5rem] font-extrabold text-appBlack">
						Pending Site Uploads
					</h5>
					<Link
						href={"/"}
						className="text-2xl md:text-[1.7rem] text-primary underline font-bold">
						View all sites
					</Link>
				</div>
				<PendingSiteUploads />
			</section>
		</>
	);
}
