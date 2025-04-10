import CompetitiveReportTable from "@/components/page_components/reports/competitive/CompetitiveReportTable";
import CompetitiveReportHeader from "@/components/page_components/reports/competitive/CompetitveReportHeader";
import { cookies } from "next/headers";
import React from "react";

export default async function page() {
	return (
		<>
			<CompetitiveReportHeader />
			<section className="bg-white rounded-2xl border border-[#E2E2E2] h-[70vh] max-h-[70vh]">
				<CompetitiveReportTable />
			</section>
		</>
	);
}
