import SiteDetailsTab from "@/components/page_components/campaigns/site-report/SiteDetailsTab";
import SiteMap from "@/components/page_components/campaigns/site-report/SiteMap";
import SiteReportHeader from "@/components/page_components/campaigns/site-report/SiteReportHeader";
import SiteReportImages from "@/components/page_components/campaigns/site-report/SiteReportImages";
import SiteReportInfo from "@/components/page_components/campaigns/site-report/SiteReportInfo";
import React from "react";
import { cookies } from "next/headers";
import { ApiInstance } from "@/utils";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/constants";

export default async function page() {
	return (
		<>
			<SiteReportHeader />
			<SiteMap />
			<SiteDetailsTab />
			<section className="w-full flex flex-col lg:flex-row gap-8 pb-12">
				<div className="shrink-0 lg:w-[40%] xl:w-[35%] p-5 xl:p-10 bg-white rounded-2xl border border-[#E7E7E7]">
					<SiteReportInfo />
				</div>
				<div className="shrink-0 lg:w-[60%] xl:w-[65%]">
					<SiteReportImages />
				</div>
			</section>
		</>
	);
}
