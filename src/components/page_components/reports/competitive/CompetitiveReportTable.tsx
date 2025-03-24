"use client";
import React, { useEffect, useState } from "react";
import AppButton from "@/components/shared/AppButton";
import CompetitiveReportTableActions from "./CompetitiveReportTableActions";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import useCredentials from "@/hooks/useCredentials";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ApiInstance, getHumanReadableAddress } from "@/utils";
import CampaignPlaceholder from "@/components/shared/CampaignPlaceholder";
import { CompetitiveUpload } from "@/types";
import Link from "next/link";
import Portal from "@/components/shared/Portal";

export default function CompetitiveReportTable() {
	const router = useRouter();
	const params = useParams();
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");
	const [dataToDisplay, setDataToDisplay] = useState<CompetitiveUpload[]>([]);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["advertisers", currentPage, search, params.advertiserId],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/competitive-map/${params.advertiserId}?page=${currentPage}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	useEffect(() => {
		if (data) {
			if (data.advertiserHasComplianceReport) {
				Promise.all(
					data.advertiserHasComplianceReport.map(
						async (d: CompetitiveUpload) => {
							const LatLng = JSON.parse(d?.geolocations);
							const address = await getHumanReadableAddress({
								lat: LatLng[0].latitude,
								lng: LatLng[0].longitude,
							});

							return { ...d, address };
						}
					)
				).then((val) => {
					setDataToDisplay(val);
				});
			} else {
				Promise.all(
					data.advertiserCompetitiveData.map(async (d: CompetitiveUpload) => {
						const LatLng = JSON.parse(d?.geolocations);
						const address = await getHumanReadableAddress({
							lat: LatLng[0].latitude,
							lng: LatLng[0].longitude,
						});

						return { ...d, address };
					})
				).then((val) => {
					setDataToDisplay(val);
				});
			}
		}
	}, [data]);

	return (
		<div className="h-full flex flex-col">
			<CompetitiveReportTableActions />

			<Portal elementId="advertiser-name">
				{dataToDisplay.length > 0 && (
					<>
						<span className="text-[1.7rem] font-bold">
							{dataToDisplay[0]?.advertiser.name}
						</span>
						<span className="flex h-[24px] w-[1px] bg-appBlack"></span>
						<span className="text-[1.7rem] font-medium">
							Total Uploads:{" "}
							<span className="font-bold">{dataToDisplay.length}</span>
						</span>
					</>
				)}
			</Portal>

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
							dataToDisplay.map((d: CompetitiveUpload, i: number) => (
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
				{!isLoading && !isFetching && dataToDisplay?.length === 0 && (
					<p className="text-4xl font-bold text-center my-10">
						Reports Not Available
					</p>
				)}
			</div>
		</div>
	);
}
