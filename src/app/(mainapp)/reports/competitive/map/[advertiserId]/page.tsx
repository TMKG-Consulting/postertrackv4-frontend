import SiteMap from "@/components/page_components/campaigns/site-report/SiteMap";
import CompetitiveAnalysisMap from "@/components/page_components/reports/competitive/CompetitiveAnalysisMap";
import CompetitiveReportHeader from "@/components/page_components/reports/competitive/CompetitveReportHeader";
import React from "react";

export default function page() {
	return (
		<>
			<CompetitiveReportHeader forMap />
			<CompetitiveAnalysisMap />
		</>
	);
}
