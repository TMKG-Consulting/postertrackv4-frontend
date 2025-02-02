"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import CampaignTableActions from "../campaigns/CampaignTableActions";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";

export default function CampaignsForComplianceReport() {
	const router = useRouter();

	return (
		<section className="bg-white rounded-2xl border border-[#E2E2E2] min-h-[70vh] mb-12">
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
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
									<div className="flex items-center justify-center">
										<AppButton
											onClick={() => router.push("/reports/compliance/fhfhf")}
											className="!w-[118px]"
											fullyRounded
											label="View Report"
										/>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					{/* <div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
						<Pagination />
					</div> */}
				</div>
			</div>
		</section>
	);
}
