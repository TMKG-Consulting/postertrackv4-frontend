import SiteMap from "@/components/page_components/campaigns/site-report/SiteMap";
import CompetitiveReportHeader from "@/components/page_components/reports/competitive/CompetitveReportHeader";
import React from "react";

export default function page() {
	return (
		<>
			<CompetitiveReportHeader forMap />
			<SiteMap height={"70vh"} />
		</>
	);
}
