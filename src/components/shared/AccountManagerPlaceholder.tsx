import React from "react";

export default function AccountManagerPlaceholder() {
	return (
		<tr
			className="border-b-[#E6E6E6] border-b 
                        ">
			<td className="text-center">
				<div className="w-[17px] h-[17px] rounded-lg bg-[#e2e2e2] animate-pulse"></div>
			</td>
			<td className="text-center">
				<div className="flex items-center gap-3">
					<div className="w-[30px] h-[30px] rounded-full object-cover bg-[#e2e2e2] animate-pulse"></div>
					<span className="text-2xl font-medium rounded-full flex w-[70px] h-[5px] bg-[#e2e2e2] animate-pulse"></span>
				</div>
			</td>
			<td className="">
				<span className="text-2xl font-medium rounded-full flex w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
				<br />
				<span className="text-2xl font-medium rounded-full flex w-[80%] h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="text-left">
				<span className="text-2xl font-medium flex w-full h-[5px] bg-[#e2e2e2] animate-pulse "></span>
			</td>
			<td>
				<span className="block text-2xl font-medium max-w-[130px] truncate w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="">
				<span className="text-2xl font-medium rounded-full flex w-1/2 h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
			<td className="text-center">
				<span className="text-2xl font-medium rounded-full flex w-full h-[5px] bg-[#e2e2e2] animate-pulse"></span>
			</td>
		</tr>
	);
}
