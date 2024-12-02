import React from "react";
import CampaignTableActions from "./CampaignTableActions";
import Kebab from "@/components/shared/icons/Kebab";
import Pagination from "@/components/shared/Pagination";

export default function CampaignsTable() {
	return (
		<div>
			<CampaignTableActions />
			<div className="w-full overflow-auto">
				<table className="w-[300%] md:w-[125%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th className="text-center">
								<span className="text-2xl font-semibold">Campaign ID</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Client</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Date</span>
							</th>
							<th>
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
							<td className="text-center">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">200</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<Kebab />
								</div>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">200</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<Kebab />
								</div>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4019</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									July 12, 2024
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">200</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<Kebab />
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="my-12 flex items-center justify-end px-10">
				<Pagination />
			</div>
		</div>
	);
}
