"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import ComplianceReportTableActions from "./ComplianceReportTableActions";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { AxiosError } from "axios";
import ComplianceReportPlaceholder from "@/components/shared/ComplianceReportPlaceholder";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";

export default function ComplianceReportTable() {
	const router = useRouter();
	const params = useParams<{ campaignId: string }>();
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["compliance-reports", params.campaignId],
		queryFn: async () => {
			const res = await ApiInstance.get(
				`/view-campaign-compliance/${params.campaignId}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return res.data;
		},
	});

	if (error && error instanceof AxiosError && error.response?.status === 404) {
		throw new Error(error.response.data.message);
	}

	return (
		<div className="w-full h-full flex flex-col">
			{data?.data && (
				<ComplianceReportTableActions
					reports={data?.data?.map((d: any, i: number) => ({
						SN: i + 1,
						Code: d.siteCode,
						State: "Abia",
						City: d.city,
						Address: d.address,
						Brand: d.brand,
						"Board Type": d.boardType,
						"Media Owner": d.mediaOwner,
						message: d.message,
						Poster: d.Poster.name,
						Structure: d.Structure.name,
						Route: d.Route.name,
						Illumination: d.Illumination.name,
						Side: d.Side.name,
						BSV: d.bsv,
						Remark: d.comment,
						"Date Captured": `${new Date(d.uploadedAt).toLocaleDateString(
							"en-US",
							{
								dateStyle: "medium",
							}
						)} at ${new Date(d.uploadedAt)
							.toLocaleTimeString("en-US", {
								hour: "2-digit",
								minute: "2-digit",
								hour12: true,
							})
							.replace(" AM", ":am")
							.replace(" PM", ":pm")}`,
					}))}
				/>
			)}
			<div className="grow w-full overflow-auto">
				<table className="w-[250%] md:w-[180%]" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th className="text-center ">
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th className="text-center ">
								<span className="text-2xl font-semibold">Code</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">State</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">City</span>
							</th>
							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Brand</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Board Type</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Media Owner</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Message</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Poster</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Structure</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Route</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Illumination</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Side</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">BSV</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Remark</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Date Captured</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{(isLoading || isFetching) &&
							[...Array(5)].map((d, i) => (
								<ComplianceReportPlaceholder key={i} />
							))}

						{!isLoading &&
							!isFetching &&
							data?.data?.length > 0 &&
							data?.data?.map((d: any, i: number) => (
								<tr
									key={i}
									className="border-b-[#E6E6E6] border-b 
                        ">
									<td className="text-center">
										<span className="text-2xl font-medium">{i + 1}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.siteCode}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.state}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.city}</span>
									</td>
									<td className="">
										<span className="text-2xl font-medium">{d.address}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium text-center">
											{d.brand}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.boardType}</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">{d.mediaOwner}</span>
									</td>

									<td className="text-center">
										<span className="text-2xl font-medium">{d.message}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.Poster.name}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.Structure.name}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.Route.name}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">
											{d.Illumination.name}
										</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.Side.name}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.bsv}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">{d.comment}</span>
									</td>
									<td className="text-center">
										<span className="text-2xl font-medium">
											{new Date(d.uploadedAt).toLocaleDateString("en-US", {
												dateStyle: "medium",
											})}
										</span>{" "}
										<br />
										<span className="text-2xl font-medium">
											{new Date(d.uploadedAt)
												.toLocaleTimeString("en-US", {
													hour: "2-digit",
													minute: "2-digit",
													hour12: true,
												})
												.replace(" AM", ":am")
												.replace(" PM", ":pm")}
										</span>
									</td>
								</tr>
							))}
					</tbody>
				</table>
				{!isLoading && !isFetching && data.Reports?.length === 0 && (
					<p className="text-4xl font-bold text-center my-10">
						Reports Not Available
					</p>
				)}
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				{!isLoading && data && data.pagination && (
					<Pagination
						currentPage={currentPage}
						totalPages={Math.ceil(
							data?.pagination.totalRecords / data.pagination.limit
						)}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</div>
	);
}
