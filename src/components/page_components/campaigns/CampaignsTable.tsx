"use client";
import React from "react";
import CampaignTableActions from "./CampaignTableActions";
import Kebab from "@/components/shared/icons/Kebab";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import ViewCampaign from "./ViewCampaign";
import AddMoreSites from "./AddMoreSites";
import DeleteCampaign from "./DeleteCampaign";

export default function CampaignsTable() {
	return (
		<div className="h-full flex flex-col">
			<CampaignTableActions />
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
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">200</span>
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
										<ViewCampaign />,
										<AddMoreSites />,
										<DeleteCampaign />,
									]}
									renderItem={({ item, index }) => (
										<div className="w-full" key={index}>
											{item}
										</div>
									)}
								/>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">200</span>
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
										<ViewCampaign />,
										<AddMoreSites />,
										<DeleteCampaign />,
									]}
									renderItem={({ item, index }) => (
										<div className="w-full" key={index}>
											{item}
										</div>
									)}
								/>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center hidden xl:table-cell">
								<span className="text-2xl font-medium">200</span>
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
										<ViewCampaign />,
										<AddMoreSites />,
										<DeleteCampaign />,
									]}
									renderItem={({ item, index }) => (
										<div className="w-full" key={index}>
											{item}
										</div>
									)}
								/>
							</td>
						</tr>
					</tbody>
				</table>
				<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
					<Pagination />
				</div>
			</div>
		</div>
	);
}
