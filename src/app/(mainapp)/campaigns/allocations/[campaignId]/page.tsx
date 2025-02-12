import AllocationsInfoHeader from "@/components/page_components/campaigns/allocations/allocation-info/AllocationInfoHeader";
import AllocationsInfoTable from "@/components/page_components/campaigns/allocations/allocation-info/AllocationsInfoTable";
import AllocationsHeader from "@/components/page_components/campaigns/allocations/AllocationsHeader";
import AllocationsTable from "@/components/page_components/campaigns/allocations/AllocationsTable";
import React from "react";

export default function page() {
	return (
		<>
			<AllocationsInfoHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] h-[70vh] max-h-[70vh]">
				<AllocationsInfoTable />
			</section>
		</>
	);
}
