"use client";
import React, { useState } from "react";
import CampaignTableActions from "./CampaignTableActions";
import Kebab from "@/components/shared/icons/Kebab";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import ViewCampaign from "./ViewCampaign";
import AddMoreSites from "./AddMoreSites";
import DeleteCampaign from "./DeleteCampaign";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import CampaignPlaceholder from "@/components/shared/CampaignPlaceholder";
import { Campaign } from "@/types";
import { useRouter } from "next/navigation";
import AppButton from "@/components/shared/AppButton";
import Link from "next/link";

export default function CampaignsTable({
	forCompliance = false,
}: {
	forCompliance?: boolean;
}) {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const router = useRouter();
	const [search, setSearch] = useState("");

	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["campaigns", currentPage, search],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/campaigns?page=${currentPage}&search=${search}`,
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
			<CampaignTableActions setSearch={setSearch} />
			<div className="grow w-full overflow-auto xl:overflow-visible">
				<table className="w-[100%] md:w-[100%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th className="text-center hidden xl:table-cell">
								<span className="text-2xl font-semibold">Campaign ID</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Client</span>
							</th>
							<th className="hidden xl:table-cell">
								<span className="text-2xl font-semibold">Date</span>
							</th>
							<th className="hidden xl:table-cell">
								<span className="text-2xl font-semibold">Total Sites</span>
							</th>
							<th className="text-center">
								<span className="text-2xl font-semibold">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{isLoading || isFetching
							? Array(5)
									.fill("")
									.map((d, index) => <CampaignPlaceholder key={index} />)
							: data.data.map((d: Campaign, i: number) => (
									<tr
										key={i}
										className="border-b-[#E6E6E6] border-b 
                        ">
										<td className="text-center">
											<span className="text-2xl font-medium">{i + 1}</span>
										</td>
										<td className="text-center hidden xl:table-cell">
											<span className="text-2xl font-medium">
												{d.campaignID}
											</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">
												{d.client?.advertiser?.name}
											</span>
										</td>
										<td className="text-center hidden xl:table-cell">
											<span className="text-2xl font-medium text-center">
												{new Date(d.uploadedAt!).toDateString()}
											</span>
										</td>
										<td className="text-center hidden xl:table-cell">
											<span className="text-2xl font-medium">
												{d.siteList.length}
											</span>
										</td>
										<td className="text-center">
											{!forCompliance && (
												<Dropdown
													bordered
													dropdownWidth="180px"
													right={0}
													top={100}
													renderButton={({ setOpen, open }) => (
														<button
															onClick={() => setOpen(!open)}
															className="w-[35px] h-[35px] rounded-full flex items-center justify-center">
															<Kebab />
														</button>
													)}
													items={[
														<ViewCampaign campaignId={d.id} />,
														<AddMoreSites campaignId={d.id} />,
														<DeleteCampaign campaignId={d.id} />,
													]}
													renderItem={({ item, index }) => (
														<div className="w-full" key={index}>
															{item}
														</div>
													)}
												/>
											)}
											{forCompliance && (
												<div className="flex items-center justify-center">
													<Link href={"/reports/compliance/" + d.id}>
														<AppButton
															className="!w-[118px]"
															fullyRounded
															label="View Report"
														/>
													</Link>
												</div>
											)}
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
