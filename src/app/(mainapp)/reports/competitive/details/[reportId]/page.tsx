import React from "react";
import SiteMap from "@/components/page_components/campaigns/site-report/SiteMap";
import CompetitiveReportDetailsHeader from "@/components/page_components/reports/competitive/details/CompetitiveReportDetailsHeader";
import SiteReportImages from "@/components/page_components/campaigns/site-report/SiteReportImages";
import CompetitiveReportSiteInfo from "@/components/page_components/reports/competitive/details/CompetitiveReportSiteInfo";

export default function page() {
	return (
		<>
			<CompetitiveReportDetailsHeader />
			<SiteMap />
			<section className="w-full flex flex-col lg:flex-row gap-8 py-12">
				<div className="shrink-0 lg:w-[40%] xl:w-[35%] p-5 xl:p-10 bg-white rounded-2xl border border-[#E7E7E7]">
					<CompetitiveReportSiteInfo />
				</div>
				<div className="shrink-0 lg:w-[60%] xl:w-[65%]">
					<SiteReportImages />
				</div>
			</section>
		</>
	);
}
