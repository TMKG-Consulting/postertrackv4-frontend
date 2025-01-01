import ComplianceReportHeader from "@/components/page_components/reports/compliance/ComplianceReportHeader";
import ComplianceReportTable from "@/components/page_components/reports/compliance/ComplianceReportTable";
import React from "react";

export default function page() {
	return (
		<>
			<ComplianceReportHeader />
			<section className="w-full overflow-hidden bg-white rounded-2xl border border-[#E2E2E2] h-[70vh] max-h-[70vh]">
				<ComplianceReportTable />
			</section>
		</>
	);
}
