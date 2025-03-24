"use client";
import React, { useEffect } from "react";
import CompetitiveReportDetailsHeader from "./CompetitiveReportDetailsHeader";
import CompetitiveReportSiteInfo from "./CompetitiveReportSiteInfo";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ApiInstance, getHumanReadableAddress } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";
import AppLoader from "@/components/shared/AppLoader";
import CompetitiveSiteMap from "./CompetitveSiteMap";
import CompetitiveSiteReportImages from "./CompetitiveSiteReportImages";

export default function CompetitiveReportWrapper() {
	const params = useParams();
	const { accessToken } = useCredentials();
	const { setReportBeingViewed, reportBeingViewed } = useReportStore();

	const { data, isLoading } = useQuery({
		queryKey: ["competitive-report-details", params.reportId],
		queryFn: async () => {
			const res = await ApiInstance.get(
				`/competitive-report/${params.reportId}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return res.data;
		},
		gcTime: 0,
	});

	useEffect(() => {
		if (data) {
			setReportBeingViewed(data?.data);
		}
	}, [data]);

	useEffect(() => {
		if (reportBeingViewed) {
			const LatLng = JSON.parse(reportBeingViewed?.geolocations);
			getHumanReadableAddress({
				lat: LatLng[0].latitude,
				lng: LatLng[0].longitude,
			}).then((address) => {
				setReportBeingViewed({ ...reportBeingViewed, address });
			});
		}
	}, [reportBeingViewed]);

	return (
		<>
			{isLoading ? (
				<div className="w-full h-full flex items-center justify-center">
					<AppLoader />
				</div>
			) : (
				<>
					<CompetitiveReportDetailsHeader />
					<CompetitiveSiteMap />
					<section className="w-full flex flex-col lg:flex-row gap-8 py-12">
						<div className="shrink-0 lg:w-[40%] xl:w-[35%] p-5 xl:p-10 bg-white rounded-2xl border border-[#E7E7E7]">
							<CompetitiveReportSiteInfo />
						</div>
						<div className="shrink-0 lg:w-[60%] xl:w-[65%]">
							<CompetitiveSiteReportImages />
						</div>
					</section>
				</>
			)}
		</>
	);
}
