"use client";
import React from "react";
import Image from "next/image";
import LogoText from "./icons/LogoText";
import Link from "next/link";
import DashboardIcon from "./icons/DashboardIcon";
import CampaignIcon from "./icons/CampaignIcon";
import { usePathname } from "next/navigation";
import AccountManagerIcon from "./icons/AccountManagerIcon";
import ReportsIcon from "./icons/ReportsIcon";
import ClientsIcon from "./icons/ClientsIcon";
import AdvertisersIcon from "./icons/AdvertisersIcon";

export default function SidePanel() {
	const pathname = usePathname();

	const isDashboard = pathname === "/";
	const isCampaigns = pathname.startsWith("/campaigns");
	const isAdvertisers = pathname === "/advertisers";
	const isAccountManagers = pathname === "/account-managers";
	const isFieldAuditors = pathname === "/field-auditors";
	const isReports = pathname === "/reports";

	return (
		<aside className="shrink-0 w-[300px] bg-appBlack h-screen sticky top-0 py-10 px-8 hidden lg:block">
			<div className="flex items-center gap-x-5 mb-12">
				<Image
					src={"/poster-track-logo.png"}
					width={40}
					height={40}
					alt="poster-track-logo"
				/>
				<LogoText />
			</div>
			<div className="flex flex-col mt-20 gap-y-8">
				<Link
					href={"/"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isDashboard ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<DashboardIcon />
					<span className="text-white text-3xl font-medium">Dashboard</span>
				</Link>
				<Link
					href={"/campaigns"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isCampaigns ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<CampaignIcon />
					<span className="text-white text-3xl font-medium">Campaigns</span>
				</Link>
				<Link
					href={"/campaigns"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isAdvertisers ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<AdvertisersIcon />
					<span className="text-white text-3xl font-medium">Advertisers</span>
				</Link>
				<Link
					href={"/campaigns"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isAccountManagers ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<AccountManagerIcon />
					<span className="text-white text-3xl font-medium">
						Account Managers
					</span>
				</Link>
				<Link
					href={"/campaigns"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isFieldAuditors ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<AccountManagerIcon />
					<span className="text-white text-3xl font-medium">
						Field Auditors
					</span>
				</Link>
				<Link
					href={"/campaigns"}
					className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
						isReports ? "bg-[#2A2625D4]" : "bg-transparent"
					}`}>
					<ReportsIcon />
					<span className="text-white text-3xl font-medium">Reports</span>
				</Link>
			</div>
		</aside>
	);
}
