"use client";
import React, { useState } from "react";
import Kebab from "@/components/shared/icons/Kebab";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import CampaignPlaceholder from "@/components/shared/CampaignPlaceholder";
import { CampaignAllocation } from "@/types";
import AllocationsInfoActions from "./AllocationsInfoActions";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function AllocationsInfoTable() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const params = useParams();
	const { campaignId } = params;

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["campaigns", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/campaign/${campaignId}/auditor-tasks`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
		gcTime: 0,
		placeholderData: keepPreviousData,
		retry: false,
	});

	return (
		<div className="h-full flex flex-col">
			<AllocationsInfoActions />
			<div className="grow w-full overflow-auto xl:overflow-visible">
				<table className="w-[100%] md:w-[100%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th className="text-center hidden xl:table-cell">
								<span className="text-2xl font-semibold">Field Auditor</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Total Sites</span>
							</th>

							<th className="hidden xl:table-cell">
								<span className="text-2xl font-semibold">Sites Approved</span>
							</th>

							
						</tr>
					</thead>
					<tbody>
						{isLoading || isFetching
							? Array(5)
									.fill("")
									.map((d, index) => <CampaignPlaceholder key={index} />)
							: data.data.map((d: any, i: number) => (
									<tr
										key={i}
										className="border-b-[#E6E6E6] border-b 
                        ">
										<td className="text-center">
											<span className="text-2xl font-medium">{i + 1}</span>
										</td>
										<td className="text-center hidden xl:table-cell">
											<span className="text-2xl font-medium">
												{d.fieldAuditor}
											</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">
												{d.totalSites}
											</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">
												{d.approvedSites}
											</span>
										</td>

										
									</tr>
							  ))}
					</tbody>
				</table>
				<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</div>
		</div>
	);
}
