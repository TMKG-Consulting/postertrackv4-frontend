"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import AppCheckbox from "@/components/shared/AppCheckbox";
import AdvertiserTableActions from "./AdvertiserTableActions";

export default function AdvertisersTable() {
	return (
		<div className="h-full flex flex-col">
			<AdvertiserTableActions />
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
								<span className="text-2xl font-semibold">Name</span>
							</th>
							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Contact Person</span>
							</th>
							<th className="">
								<span className="text-2xl font-semibold">Contact Phone</span>
							</th>
							<th className="text-left">
								<span className="text-2xl font-semibold">Contact Email</span>
							</th>
							<th className="text-center"></th>
						</tr>
					</thead>
					<tbody>
						<tr
							className="border-b-[#E6E6E6] border-b 
                        ">
							<td className="text-center">
								<div>
									<AppCheckbox name="check-all" />
								</div>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">John Doe</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">09450234586</span>
							</td>
							<td className="">
								<span className="block text-2xl font-medium w-max max-w-[130px] truncate">
									adam@email.comalksakdskdsklsdlkdsklsalksdlk
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
									items={[]}
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
								<div>
									<AppCheckbox name="check-all" />
								</div>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">John Doe</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">09450234586</span>
							</td>
							<td className="">
								<span className="block text-2xl font-medium w-max max-w-[130px] truncate">
									adam@email.comalksakdskdsklsdlkdsklsalksdlk
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
									items={[]}
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
								<div>
									<AppCheckbox name="check-all" />
								</div>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">ABC Limited</span>
							</td>
							<td className="">
								<span className="text-2xl font-medium">
									Along adeniran ogunsanya street surulere ftt bode thomas and
									shoprite
								</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">John Doe</span>
							</td>
							<td className="text-center">
								<span className="text-2xl font-medium">09450234586</span>
							</td>
							<td className="">
								<span className="block text-2xl font-medium w-max max-w-[130px] truncate">
									adam@email.comalksakdskdsklsdlkdsklsalksdlk
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
									items={[]}
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
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination />
			</div>
		</div>
	);
}
