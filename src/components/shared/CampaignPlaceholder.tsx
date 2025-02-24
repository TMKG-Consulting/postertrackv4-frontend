import React from "react";

export default function CampaignPlaceholder() {
	return (
		<tr
			className="border-b-[#E6E6E6] border-b 
                        ">
			<td className="text-center">
				<div className="w-full h-[5px] rounded-lg bg-[#e2e2e2] animate-pulse"></div>
			</td>

			<td className="hidden xl:table-cell">
				<span className="text-2xl font-medium rounded-full flex w-[80%] h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="text-left">
				<span className="text-2xl font-medium flex w-full h-[5px] bg-[#e2e2e2] animate-pulse "></span>
			</td>
			<td className="hidden xl:table-cell">
				<span className=" text-2xl font-medium  truncate w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="">
				<span className="text-2xl font-medium rounded-full flex w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="hidden xl:table-cell text-center">
				<span className="text-2xl font-medium rounded-full flex w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
		</tr>
	);
}
