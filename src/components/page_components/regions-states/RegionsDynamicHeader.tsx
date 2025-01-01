"use client";
import React from "react";
import { useLocationsStore } from "@/components/shared/providers/LocationsProvider";
import AppButton from "@/components/shared/AppButton";
import FiltersIcon from "@/components/shared/icons/FiltersIcon";
import PlusIcon from "@/components/shared/icons/PlusIcon";
import Link from "next/link";

export default function RegionsDynamicHeader() {
	const { currentTab, setCurrentTab } = useLocationsStore();

	const isRegions = currentTab === "regions";
	const isStates = currentTab === "states";
	const isCities = currentTab === "cities";

	return (
		<section className="flex flex-col md:flex-row md:items-center justify-between gap-y-10">
			<div className="bg-[#ED323729] w-[300px] h-[50px] rounded-[10px] px-[7px] grid grid-cols-3">
				<div className="w-full h-full flex items-center">
					<AppButton
						onClick={() => setCurrentTab("regions")}
						label="Regions"
						className={`!h-[36px] !text-[1.7rem] font-semibold !rounded-lg ${
							isRegions
								? "!bg-white !text-primary"
								: "!bg-transparent !text-[#6F6F6F]"
						}`}
					/>
				</div>
				<div className="w-full h-full flex items-center">
					<AppButton
						onClick={() => setCurrentTab("states")}
						label="States"
						className={`!h-[36px] !text-[1.7rem] font-semibold !rounded-lg ${
							isStates
								? "!bg-white !text-primary"
								: "!bg-transparent !text-[#6F6F6F]"
						}`}
					/>
				</div>
				<div className="w-full h-full flex items-center">
					<AppButton
						onClick={() => setCurrentTab("cities")}
						label="Cities"
						className={`!h-[36px] !text-[1.7rem] font-semibold !rounded-lg ${
							isCities
								? "!bg-white !text-primary"
								: "!bg-transparent !text-[#6F6F6F]"
						}`}
					/>
				</div>
			</div>

			{isRegions && (
				<Link href={"/campaigns/create"}>
					<AppButton className="!w-[150px]" fullyRounded>
						<div className="flex items-center gap-x-2 md:gap-x-5">
							<PlusIcon />
							<span className="md:text-[1.7rem] font-medium">Add Region</span>
						</div>
					</AppButton>
				</Link>
			)}

			{isStates && (
				<div className="flex items-center gap-8">
					<AppButton
						fullyRounded
						className="!bg-white border border-[#BFBFBF] !w-[180px] gap-5">
						<FiltersIcon />
						<span className="md:text-[1.7rem] font-medium text-[#666666]">
							Filter by region
						</span>
					</AppButton>
					<Link href={"/campaigns/create"}>
						<AppButton className="!w-[150px]" fullyRounded>
							<div className="flex items-center gap-x-2 md:gap-x-5">
								<PlusIcon />
								<span className="md:text-[1.7rem] font-medium">Add State</span>
							</div>
						</AppButton>
					</Link>
				</div>
			)}

			{isCities && (
				<div className="flex items-center gap-8">
					<AppButton
						fullyRounded
						className="!bg-white border border-[#BFBFBF] !w-[180px] gap-5">
						<FiltersIcon />
						<span className="md:text-[1.7rem] font-medium text-[#666666]">
							Filter by state
						</span>
					</AppButton>
					<Link href={"/campaigns/create"}>
						<AppButton className="!w-[150px]" fullyRounded>
							<div className="flex items-center gap-x-2 md:gap-x-5">
								<PlusIcon />
								<span className="md:text-[1.7rem] font-medium">Add City</span>
							</div>
						</AppButton>
					</Link>
				</div>
			)}
		</section>
	);
}
