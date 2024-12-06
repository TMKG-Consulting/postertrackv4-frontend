import AppButton from "@/components/shared/AppButton";
import CautionIcon from "@/components/shared/icons/CautionIcon";
import DeleteIcon from "@/components/shared/icons/DeleteIcon";
import React from "react";

export default function DuplicatesFound() {
	return (
		<div className="w-full">
			<div className="px-5 md:px-12 pb-12">
				<div className="w-full h-[67px] border-[1.5px] border-[#ED323796] bg-[#FFE7E7] rounded-xl p-3 flex items-center gap-x-6">
					<div className="bg-primary w-[38px] h-[38px] rounded-full flex items-center justify-center">
						<CautionIcon />
					</div>
					<div className="flex flex-col gap-y-[3px]">
						<span className="text-[1.7rem] font-semibold">
							Do you want to continue ?
						</span>
						<span className="text-2xl">Duplicated addresses found.</span>
					</div>
				</div>
			</div>
			<div className="w-full overflow-auto">
				<table className="w-[300%] md:w-[125%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<span className="text-2xl font-semibold">SN</span>
							</th>
							<th className="text-center">
								<span className="text-2xl font-semibold">Code</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Brand</span>
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
								<span className="text-2xl font-semibold">Contractor</span>
							</th>
							<th>
								<span className="text-2xl font-semibold">Media Type</span>
							</th>
							<th className="text-center"></th>
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
							<td className="text-left">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Prime Media</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">LED</span>
							</td>
							<td className="text-center">
								<button className="w-[45px] h-[45px] rounded-full border-primary border-[1.5px] bg-[#ED32373B] flex items-center justify-center">
									<DeleteIcon />
								</button>
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
							<td className="text-left">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Prime Media</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">LED</span>
							</td>
							<td className="text-center">
								<button className="w-[45px] h-[45px] rounded-full border-primary border-[1.5px] bg-[#ED32373B] flex items-center justify-center">
									<DeleteIcon />
								</button>
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
							<td className="text-left">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">Prime Media</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">LED</span>
							</td>
							<td className="text-center">
								<button className="w-[45px] h-[45px] rounded-full border-primary border-[1.5px] bg-[#ED32373B] flex items-center justify-center">
									<DeleteIcon />
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="flex items-center gap-x-7 p-12">
				<div className="w-[146px]">
					<AppButton
						label="Cancel Upload"
						fullyRounded
						className="!bg-white border-[1.5px] border-primary !text-primary font-medium"
					/>
				</div>
				<div className="w-[146px]">
					<AppButton
						label="Continue Upload"
						fullyRounded
						className="font-medium"
					/>
				</div>
			</div>
		</div>
	);
}
