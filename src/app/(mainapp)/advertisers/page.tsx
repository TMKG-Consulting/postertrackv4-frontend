import AdvertisersHeader from "@/components/page_components/advertisers/AdvertisersHeader";
import AdvertisersTable from "@/components/page_components/advertisers/AdvertisersTable";
import React from "react";

export default function page() {
	return (
		<>
			<AdvertisersHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] h-max">
				<AdvertisersTable />
			</section>
		</>
	);
}
