"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";

export default function PendingSiteUploads() {
	const { accessToken } = useCredentials();

	const { data, isLoading, error } = useQuery({
		queryKey: [],
		queryFn: async () => {
			const res = await ApiInstance.get("/sites/pending-uploads", {
				headers: {
					"auth-token": accessToken,
				},
			});

			return res.data;
		},
	});

	console.log(data);
	return (
		<div className="w-full overflow-auto">
			<table className="w-[300%] md:w-[125%] xl:w-full" cellPadding={10}>
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
						<th>
							<span className="text-2xl font-semibold">State</span>
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
					</tr>
				</thead>
				<tbody>
					<tr className="border-b-[#E6E6E6] border-b last:border-b-0">
						<td className="text-center">
							<span className="text-2xl font-medium">1</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">4019</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Airtel</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium text-center">AIRAUG24</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Ikeja</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Lagos</span>
						</td>
						<td className="text-left">
							<span className="text-2xl font-medium">
								Along adeniran ogunsanya street surulere ftt bode thomas and
								shoprite
							</span>
						</td>
						<td className="text-center">
							<span className="flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
								Pending
							</span>
						</td>
						<td className="text-right">
							<span className="text-2xl font-medium">July 20, 2024</span> <br />
							<span className="text-2xl font-medium">11:55 AM</span>
						</td>
					</tr>
					<tr className="border-b-[#E6E6E6] border-b last:border-b-0">
						<td className="text-center">
							<span className="text-2xl font-medium">1</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">4019</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Airtel</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium text-center">AIRAUG24</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Ikeja</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Lagos</span>
						</td>
						<td className="text-left">
							<span className="text-2xl font-medium">
								Along adeniran ogunsanya street surulere ftt bode thomas and
								shoprite
							</span>
						</td>
						<td className="text-center">
							<span className="flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
								Pending
							</span>
						</td>
						<td className="text-right">
							<span className="text-2xl font-medium">July 20, 2024</span> <br />
							<span className="text-2xl font-medium">11:55 AM</span>
						</td>
					</tr>
					<tr className="border-b-[#E6E6E6] border-b last:border-b-0">
						<td className="text-center">
							<span className="text-2xl font-medium">1</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">4019</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Airtel</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium text-center">AIRAUG24</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Ikeja</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Lagos</span>
						</td>
						<td className="text-left">
							<span className="text-2xl font-medium">
								Along adeniran ogunsanya street surulere ftt bode thomas and
								shoprite
							</span>
						</td>
						<td className="text-center">
							<span className="flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
								Pending
							</span>
						</td>
						<td className="text-right">
							<span className="text-2xl font-medium">July 20, 2024</span> <br />
							<span className="text-2xl font-medium">11:55 AM</span>
						</td>
					</tr>
					<tr className="border-b-[#E6E6E6] border-b last:border-b-0">
						<td className="text-center">
							<span className="text-2xl font-medium">1</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">4019</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Airtel</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium text-center">AIRAUG24</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Ikeja</span>
						</td>
						<td className="text-center">
							<span className="text-2xl font-medium">Lagos</span>
						</td>
						<td className="text-left">
							<span className="text-2xl font-medium">
								Along adeniran ogunsanya street surulere ftt bode thomas and
								shoprite
							</span>
						</td>
						<td className="text-center">
							<span className="flex p-[5px] border-[1.5px] border-[#FF8617] bg-[#FFE3CA] rounded-full text-[#FF8617] text-2xl items-center justify-center font-medium">
								Pending
							</span>
						</td>
						<td className="text-right">
							<span className="text-2xl font-medium">July 20, 2024</span> <br />
							<span className="text-2xl font-medium">11:55 AM</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
