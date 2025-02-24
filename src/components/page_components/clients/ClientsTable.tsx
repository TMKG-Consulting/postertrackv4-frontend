"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import AppCheckbox from "@/components/shared/AppCheckbox";
import ClientsTableActions from "./ClientsTableActions";
import EditClientInfo from "./EditClientInfo";
import DeactivateClient from "./DeactivateClient";
import ResetClientPassword from "./ResetClientPassword";
import useUserManagement from "@/hooks/useUserManagement";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import ClientPlaceholder from "@/components/shared/ClientPlaceholder";

export default function ClientsTable() {
	const { getClients } = useUserManagement();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["clients", currentPage, search],
		queryFn: async () => {
			const response = await getClients(currentPage, search);

			return response;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	return (
		<div className="h-full flex flex-col">
			<ClientsTableActions setSearch={setSearch} />
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
								<span className="text-2xl font-semibold">Industry</span>
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
						{isLoading || isFetching
							? Array(5)
									.fill("")
									.map((d, index) => <ClientPlaceholder key={index} />)
							: //@ts-ignore
							  data.data.map((d, index) => (
									<tr
										key={index}
										className="border-b-[#E6E6E6] border-b 
                        ">
										<td className="text-center">
											<div>
												<AppCheckbox name="check-all" />
											</div>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">
												{d.advertiser.name}
											</span>
										</td>
										<td className="">
											<span className="text-2xl font-medium">{d.address}</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">
												{d.industry.name}
											</span>
										</td>
										<td className="text-center">
											<span className="text-2xl font-medium">{d.phone}</span>
										</td>
										<td className="">
											<span className="block text-2xl font-medium w-max max-w-[130px] truncate">
												{d.email}
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
												items={[
													<EditClientInfo client={d} />,
													<DeactivateClient />,
													<ResetClientPassword />,
												]}
												renderItem={({ item, index }) => (
													<div className="w-full" key={index}>
														{item}
													</div>
												)}
											/>
										</td>
									</tr>
							  ))}
					</tbody>
				</table>
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				<Pagination
					currentPage={currentPage}
					totalPages={data?.totalPages}
					setCurrentPage={setCurrentPage}
				/>
			</div>
		</div>
	);
}
