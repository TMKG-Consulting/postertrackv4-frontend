import ReportsHeader from "@/components/page_components/reports/ReportsHeader";
import ReportsPageWrapper from "@/components/page_components/reports/ReportsPageWrapper";
import ReportsTab from "@/components/page_components/reports/ReportsTab";
import React from "react";

export default function page() {
	return (
		<>
			<ReportsHeader />
			<ReportsTab />
			<ReportsPageWrapper />
		</>
	);
}
