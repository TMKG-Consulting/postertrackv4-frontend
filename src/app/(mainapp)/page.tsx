import DashboardHeader from "@/components/page_components/dashboard/DashboardHeader";
import PendingSiteUploads from "@/components/page_components/dashboard/PendingSiteUploads";
import ClientsIcon from "@/components/shared/icons/ClientsIcon";
import AdvertisersIcon from "@/components/shared/icons/AdvertisersIcon";
import Link from "next/link";
import React from "react";
import TotalSitesIcon from "@/components/shared/icons/TotalSitesIcon";
import TotalCampaignsIcon from "@/components/shared/icons/TotalCampaignsIcon";

export default function page() {
	return (
		<>
			<DashboardHeader />
			<section className="grid md:grid-cols-3 gap-10 mt-10">
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Advertisers
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Brands
						</span>
						<ClientsIcon fill="#3632ED" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Media Owners
						</span>
						<ClientsIcon fill="#139B9B" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Field Auditors
						</span>
						<ClientsIcon fill="#ED3D05" />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Total Sites
						</span>
						<TotalSitesIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Campaigns
						</span>
						<TotalCampaignsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
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
