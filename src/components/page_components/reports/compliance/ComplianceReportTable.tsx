"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import AppButton from "@/components/shared/AppButton";
import { useRouter } from "next/navigation";
import ComplianceReportTableActions from "./ComplianceReportTableActions";

export default function ComplianceReportTable() {
	const router = useRouter();

	return (
		<div className="w-full h-full flex flex-col">
			<ComplianceReportTableActions />
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
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4592</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									Golden Morn
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Portrait</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">Dual Vision</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Good</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">B</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">N/A</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Left</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">84</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Jan 19,2024</span>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4592</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									Golden Morn
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Portrait</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">Dual Vision</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Good</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">B</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">N/A</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Left</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">84</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Jan 19,2024</span>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4592</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									Golden Morn
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Portrait</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">Dual Vision</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Good</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">B</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">N/A</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Left</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">84</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Jan 19,2024</span>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4592</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									Golden Morn
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Portrait</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">Dual Vision</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Good</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">B</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">N/A</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Left</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">84</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Jan 19,2024</span>
							</td>
						</tr>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<span className="text-2xl font-medium">1</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">4592</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Abia</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium text-center">
									Golden Morn
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Portrait</span>
							</td>

							<td className="text-center">
								<span className="text-2xl font-medium">Dual Vision</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Good</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">B</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">N/A</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Left</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">84</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Ok</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Jan 19,2024</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			{/* <div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination />
			</div> */}
		</div>
	);
}
