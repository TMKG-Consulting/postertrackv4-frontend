"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { ApiInstance, getHumanReadableAddress } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import ComplianceReportPlaceholder from "@/components/shared/ComplianceReportPlaceholder";
import { CompetitiveUpload } from "@/types";
import CampaignPlaceholder from "@/components/shared/CampaignPlaceholder";
import Link from "next/link";

export default function AllCompetitive() {
	const router = useRouter();
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["all-competitive"],
		queryFn: async () => {
			const res = await ApiInstance.get(`/competitive-report`, {
				headers: {
					"auth-token": accessToken,
				},
			});

			const newUploads = await Promise.all(
				res.data.uploads.map(async (d: CompetitiveUpload) => {
					const LatLng = JSON.parse(d?.geolocations);
					const address = await getHumanReadableAddress({
						lat: LatLng[0].latitude,
						lng: LatLng[0].longitude,
					});

					return { ...d, address };
				})
			);

			return { ...res.data, uploads: newUploads };
		},
		gcTime: 0,
	});

	return (
		<div className="h-full flex flex-col">
			{/* <CompetitiveReportTableActions /> */}
			<div className="grow w-full overflow-auto xl:overflow-visible">
				<table className="w-[250%] md:w-[150%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th className="text-center ">
								<span className="text-2xl font-semibold">Advertiser</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Brand</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Board</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Category</span>
							</th>
							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">City</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">State</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Region</span>
							</th>
							<th className="text-center"></th>
						</tr>
					</thead>
					<tbody>
						{(isLoading || isFetching) &&
							[...Array(5)].map((d, i) => <CampaignPlaceholder key={i} />)}
						{!isLoading &&
							!isFetching &&
							data?.uploads.map((d: CompetitiveUpload, i: number) => (
								<tr
									key={i}
									className="border-b-[#E6E6E6] border-b 
                        ">
									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.advertiser.name}
										</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">{d.brand.name}</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.boardType.name}
										</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.category.name}
										</span>
									</td>

									<td className="">
										<span className="text-2xl font-medium">{d.address}</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium text-center">
											{d.city.name}
										</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">{d.state.name}</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.region.name}
										</span>
									</td>

									<td className="text-center">
										<div className="flex items-center justify-center">
											<Link href={`/reports/competitive/details/${d.id}`}>
												<AppButton
													className="!w-[118px]"
													fullyRounded
													label="View"
												/>
											</Link>
										</div>
									</td>
								</tr>
							))}
					</tbody>
				</table>
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination
					currentPage={currentPage}
					totalPages={Math.ceil(data?.total / data?.limit)}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
