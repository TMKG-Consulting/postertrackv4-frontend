import AllocationsHeader from "@/components/page_components/campaigns/allocations/AllocationsHeader";
import AllocationsTable from "@/components/page_components/campaigns/allocations/AllocationsTable";
import React from "react";

export default function page() {
	return (
		<>
			<AllocationsHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] h-[70vh] max-h-[70vh]">
				<AllocationsTable />
			</section>
		</>
	);
}
