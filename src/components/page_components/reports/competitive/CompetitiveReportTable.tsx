"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import AppButton from "@/components/shared/AppButton";
import CompetitiveReportTableActions from "./CompetitiveReportTableActions";
import { useRouter } from "next/navigation";

export default function CompetitiveReportTable() {
	const router = useRouter();
	return (
		<div className="h-full flex flex-col">
			<CompetitiveReportTableActions />
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
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">Arla Foods</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Airtel</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Backlit</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Milk</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">Ikeja</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Lagos</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">South West</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<AppButton
										onClick={() =>
											router.push("/reports/competitive/details/fjgjg")
										}
										className="!w-[118px]"
										fullyRounded
										label="View"
									/>
								</div>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">Arla Foods</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Airtel</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Backlit</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Milk</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">Ikeja</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Lagos</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">South West</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<AppButton
										onClick={() =>
											router.push("/reports/competitive/details/fjgjg")
										}
										className="!w-[118px]"
										fullyRounded
										label="View"
									/>
								</div>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">Arla Foods</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Airtel</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Backlit</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Milk</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">Ikeja</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Lagos</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">South West</span>
							</td>
							<td className="text-center">
								<div className="flex items-center justify-center">
									<AppButton
										onClick={() =>
											router.push("/reports/competitive/details/fjgjg")
										}
										className="!w-[118px]"
										fullyRounded
										label="View"
									/>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination />
			</div>
		</div>
	);
}
