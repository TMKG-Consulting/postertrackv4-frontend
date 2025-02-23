"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import Link from "next/link";
import Pagination from "@/components/shared/Pagination";
import PendingSitesPlaceholder from "@/components/shared/PendingSitesPlaceholder";
import { SiteAssignmentReport } from "@/types";

export default function PendingSiteUploads() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["pending-uploads", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get(
				"/compliance/pending-approval?page=" + currentPage,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
	});

	return (
		<div className="h-full flex flex-col">
			<div className="w-full grow overflow-auto xl:overflow-visible">
				<table className="w-[300%] md:w-[125%] xl:w-full " cellPadding={10}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Code</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Brand</span>
							</th>
							<th className="text-center">
								<span className="text-2xl font-semibold">Campaign ID</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">City</span>
							</th>

							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Status</span>
							</th>
							<th className="text-right">
								<span className="text-2xl font-semibold">Date Uploaded</span>
							</th>
							<th className="text-right"></th>
						</tr>
					</thead>
					<tbody>
						{isLoading &&
							[1, 2, 3, 4, 5].map((d, i) => (
								<PendingSitesPlaceholder key={i} />
							))}
						{!isLoading &&
							data?.pendingSites.length > 0 &&
							data?.pendingSites.map((d: SiteAssignmentReport, i: number) => {
								const isPending = d.status === "pending";
								const isApproved = d.status === "approved";
								const disapproved = d.status === "disapproved";

								return (
									<tr
										key={i}
										className="border-b-[#E6E6E6] border-b last:border-b-0 cursor-pointer">
										<td className="text-center">
											<span className="text-2xl font-medium">{i + 1}</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">{d.siteCode}</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">{d.brand}</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium text-center">
												{d.campaignId}
											</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">{d.city}</span>
										</td>

										<td className="text-left">
											<span className="text-2xl font-medium">{d.address}</span>
										</td>
										<td className="text-center">
											<span
												className={`flex p-[5px] border-[1.5px] ${
													isPending
														? "border-[#FF8617] text-[#FF8617]  bg-[#FFE3CA]"
														: ""
												} ${
													isApproved
														? "border-[#1b8e41] text-[#1b8e41]  bg-[#bbe7ca]"
														: ""
												}  ${
													disapproved
														? "border-[#e7352b] text-[#e7352b]  bg-[#e7c1bb]"
														: ""
												} rounded-full text-2xl items-center justify-center font-medium`}>
												{d.status}
											</span>
										</td>
										<td className="text-right">
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
										<td className="text-right">
											<Link
												href={"/campaigns/site-report/" + d.siteAssignmentId}
												className="text-2xl md:text-[1.7rem] text-primary underline font-medium">
												View report
											</Link>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
				{!isLoading && !isFetching && data.pendingSites?.length === 0 && (
					<p className="text-4xl font-bold text-center my-10">
						Reports Not Available
					</p>
				)}
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				{!isLoading && (
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</div>
	);
}
