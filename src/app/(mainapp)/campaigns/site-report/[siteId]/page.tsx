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
			<section className="w-full flex flex-col lg:flex-row pb-12 justify-between">
				<div className="shrink-0 lg:w-[39%] xl:w-[34%] p-5 xl:p-10 bg-white rounded-2xl border border-[#E7E7E7]">
					<SiteReportInfo />
				</div>
				<div className="shrink-0 lg:w-[59%] xl:w-[64%] ">
					<SiteReportImages />
				</div>
			</section>
		</>
	);
}
