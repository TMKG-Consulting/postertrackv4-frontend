"use client";
import React from "react";
import LocationIcon from "@/components/shared/icons/LocationIcon";
import { useLocationsStore } from "@/components/shared/providers/LocationsProvider";

export default function StatesList() {
	const { currentTab, states, regions, cities, statesToShowByRegion } =
		useLocationsStore();

	if (currentTab !== "states") {
		return null;
	}

	return (
		<section className="grid md:grid-cols-3 my-[20px] gap-5 pt-[15px] border-t border-t-[#e2e2e2]">
			{states.map((state) => {
				const numCities = cities.filter((c) => c.stateId === state.id);
				const region = regions.find((r) => r.id === state.regionId);
				if (!statesToShowByRegion.includes(Number(state.regionId))) {
					return;
				}

				return (
					<div
						key={state.id}
						className="p-[10px] bg-white border border-[#E2E2E2] rounded-2xl">
						<div className="flex items-center gap-5">
							<LocationIcon fill="#ED3237" />
							<span className="text-[17px] font-semibold text-appBlack">
								{state.name}
							</span>
						</div>
						<div className=" mt-[10px] pt-[10px] border-t border-t-[#e2e2e2] flex  xl:items-center gap-5 xl:flex-row flex-col">
							<div className="w-max rounded-lg bg-[#E7E7E7] flex items-center justify-center p-3 px-8">
								<span className="text-2xl font-medium text-[#6F6F6F]">
									{numCities.length} cities
								</span>
							</div>
							<div className="w-max rounded-lg bg-[#E7E7E7] flex items-center justify-center p-3 px-8">
								<span className="text-2xl font-medium text-[#6F6F6F]">
									{region?.name}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</section>
	);
}
