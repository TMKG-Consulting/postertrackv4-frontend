import CitiesList from "@/components/page_components/regions-states/CitiesList";
import RegionsDynamicHeader from "@/components/page_components/regions-states/RegionsDynamicHeader";
import RegionsList from "@/components/page_components/regions-states/RegionsList";
import StatesList from "@/components/page_components/regions-states/StatesList";
import React from "react";

export default function page() {
	return (
		<>
			<section className="w-full h-[8rem] md:h-[10rem] flex flex-col md:flex-row md:items-center justify-center gap-y-10 md:justify-between">
				<h2 className="text-[3rem] lg:text-[2.4rem] xl:text-[28px] font-black">
					Locations
				</h2>
			</section>
			<RegionsDynamicHeader />
			<RegionsList />
			<StatesList />
			<CitiesList />
		</>
	);
}
