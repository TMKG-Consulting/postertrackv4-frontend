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
import AdvertisersIcon from "./icons/AdvertisersIcon";
import LocationIcon from "./icons/LocationIcon";
import CategoryIcon from "./icons/CategoryIcon";
import { useRootStore } from "./providers/RootProvider";
import { Role } from "@/types";

export default function SidePanel() {
	const pathname = usePathname();
	const { userDetails } = useRootStore();

	const isDashboard = pathname === "/";
	const isCampaigns = pathname.startsWith("/campaigns");
	const isAdvertisers = pathname.startsWith("/advertisers");
	const isClients = pathname.startsWith("/clients");
	const isAccountManagers = pathname.startsWith("/account-managers");
	const isFieldAuditors = pathname.startsWith("/field-auditors");
	const isReports = pathname.startsWith("/reports");
	const isRegions = pathname.startsWith("/regions-states");
	const isCategories = pathname.startsWith("/categories");
	const isBrands = pathname.startsWith("/brands");

	const role = userDetails?.role;

	if (!role) {
		return;
	}

	const canSeeDashboard: boolean = [
		"ACCOUNT_MANAGER",
		"CHIEF_ACCOUNT_MANAGER",
		"SUPER_ADMIN",
	].includes(role);

	const canSeeCampaigns: boolean = [
		"ACCOUNT_MANAGER",
		"CHIEF_ACCOUNT_MANAGER",
		"SUPER_ADMIN",
		"CLIENT_AGENCY_USER",
	].includes(role);

	const canSeeReports: boolean = [
		"ACCOUNT_MANAGER",
		"CHIEF_ACCOUNT_MANAGER",
		"SUPER_ADMIN",
		"CLIENT_AGENCY_USER",
	].includes(role);

	const canSeeOthers: boolean = [
		"CHIEF_ACCOUNT_MANAGER",
		"SUPER_ADMIN",
	].includes(role);

	return (
		<aside className="shrink-0 w-[300px] bg-appBlack h-screen sticky top-0 py-10 px-8 hidden lg:block overflow-auto">
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
				{canSeeDashboard && (
					<Link
						href={"/"}
						className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
							isDashboard ? "bg-[#2A2625D4]" : "bg-transparent"
						}`}>
						<DashboardIcon />
						<span className="text-white text-3xl font-medium">Dashboard</span>
					</Link>
				)}
				{canSeeCampaigns && (
					<Link
						href={"/campaigns"}
						className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
							isCampaigns ? "bg-[#2A2625D4]" : "bg-transparent"
						}`}>
						<CampaignIcon />
						<span className="text-white text-3xl font-medium">Campaigns</span>
					</Link>
				)}
				{canSeeOthers && (
					<>
						<Link
							href={"/clients"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isClients ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<AdvertisersIcon />
							<span className="text-white text-3xl font-medium">Clients</span>
						</Link>
						<Link
							href={"/brands"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isBrands ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<AdvertisersIcon />
							<span className="text-white text-3xl font-medium">Brands</span>
						</Link>
						<Link
							href={"/account-managers"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isAccountManagers ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<AccountManagerIcon />
							<span className="text-white text-3xl font-medium">
								Account Managers
							</span>
						</Link>
						<Link
							href={"/field-auditors"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isFieldAuditors ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<AccountManagerIcon />
							<span className="text-white text-3xl font-medium">
								Field Auditors
							</span>
						</Link>
					</>
				)}
				{canSeeReports && (
					<Link
						href={"/reports"}
						className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
							isReports ? "bg-[#2A2625D4]" : "bg-transparent"
						}`}>
						<ReportsIcon />
						<span className="text-white text-3xl font-medium">Reports</span>
					</Link>
				)}
				{canSeeOthers && (
					<>
						<Link
							href={"/advertisers"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isAdvertisers ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<AdvertisersIcon />
							<span className="text-white text-3xl font-medium">
								Advertisers
							</span>
						</Link>
						<Link
							href={"/regions-states"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isRegions ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<LocationIcon />
							<span className="text-white text-3xl font-medium">
								Regions & States
							</span>
						</Link>
						<Link
							href={"/categories"}
							className={`flex items-center gap-5 h-[40px] rounded-lg px-5 ${
								isCategories ? "bg-[#2A2625D4]" : "bg-transparent"
							}`}>
							<CategoryIcon />
							<span className="text-white text-3xl font-medium">
								Categories
							</span>
						</Link>
					</>
				)}
			</div>
		</aside>
	);
}
