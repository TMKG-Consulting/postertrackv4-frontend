import DashboardHeader from "@/components/page_components/dashboard/DashboardHeader";
import PendingSiteUploads from "@/components/page_components/dashboard/PendingSiteUploads";
import ClientsIcon from "@/components/shared/icons/ClientsIcon";
import Link from "next/link";
import React from "react";

export default function page() {
	return (
		<>
			<DashboardHeader />
			<section className="grid md:grid-cols-3 gap-10 mt-10">
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
					</div>
					<span className="text-[4rem] font-extrabold text-appBlack">500</span>
				</div>
				<div className="w-full h-[128px] rounded-2xl bg-white p-8">
					<div className="flex items-center justify-between">
						<span className="text-[1.8rem] font-semibold text-appBlack">
							Clients
						</span>
						<ClientsIcon />
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
