"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import AppCheckbox from "@/components/shared/AppCheckbox";
import SiteListTableActions from "./SiteListTableActions";
import ViewSiteReport from "./ViewSiteReport";
import EditSite from "./EditSite";
import DeleteSite from "./DeleteSite";
import { Campaign, Site } from "@/types";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { useParams } from "next/navigation";
import { ApiInstance } from "@/utils";
import SitePlaceholder from "@/components/shared/SitePlaceholder";

export default function CampaignSiteListTable({
	campaign,
}: {
	campaign: Campaign;
}) {
	const { accessToken } = useCredentials();
	const params = useParams();
	const { data, isLoading, isFetching } = useQuery({
		queryKey: ["campaignDetails", params.campaignId],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/campaigns/${params.campaignId}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data.campaign;
		},
		initialData: campaign,
	});

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const totalPages = Math.ceil(data?.siteList.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	return (
		<div className="h-full flex flex-col">
			<SiteListTableActions />
			<div className="grow w-full overflow-auto xl:overflow-visible">
				<table className="w-[250%] md:w-[150%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<div>
									<AppCheckbox name="check-all" />
								</div>
							</th>
							<th className="text-center ">
								<span className="text-2xl font-semibold">Code</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Brand</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">City</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">State</span>
							</th>
							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Media Owner</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Media Type</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Status</span>
							</th>
							<th className="text-center">
								<span className="text-2xl font-semibold">Actions</span>
							</th>
						</tr>
					</thead>
					<tbody>
						{isLoading || isFetching
							? [1, 2, 3, 4, 5, 6].map((d, i) => <SitePlaceholder key={i} />)
							: data?.siteList
									.slice(startIndex, endIndex)
									.map((d: Site, i: number) => (
										<tr
											key={i}
											className="border-b-[#E6E6E6] border-b 
                        ">
											<td className="text-center">
												<div>
													<AppCheckbox name="check-all" />
												</div>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium">{d.code}</span>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium">{d.brand}</span>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium text-center">
													{d.state}
												</span>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium">{d.city}</span>
											</td>
											<td className="">
												<span className="text-xl font-medium">
													{d.location}
												</span>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium">
													{d.mediaOwner}
												</span>
											</td>
											<td className="text-center">
												<span className="text-xl font-medium">Led</span>
											</td>
											<td className="text-center">
												<span className="flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
													{
														data?.siteAssignments.find(
															// @ts-ignore
															(a) => a.siteCode === d.code
														)?.status
													}
												</span>
											</td>
											<td className="text-center">
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
														<ViewSiteReport />,
														<EditSite />,
														<DeleteSite />,
													]}
													renderItem={({ item, index }) => (
														<div className="w-full" key={index}>
															{item}
														</div>
													)}
												/>
											</td>
										</tr>
									))}
					</tbody>
				</table>
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
					totalPages={totalPages}
				/>
			</div>
		</div>
	);
}
