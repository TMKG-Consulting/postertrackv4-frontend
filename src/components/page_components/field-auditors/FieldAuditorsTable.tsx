"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import AppCheckbox from "@/components/shared/AppCheckbox";
import Image from "next/image";
import Switch from "@/components/shared/Switch";
import FieldAuditorsTableActions from "./FieldAuditorsTableActions";
import EditFieldAuditor from "./EditFieldAuditor";
import DeactivateFieldAuditor from "./DeactivatefieldAuditor";
import ResetFieldAuditorPassword from "./ResetFieldAuditorPassword";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import useUserManagement from "@/hooks/useUserManagement";
import AccountManagerPlaceholder from "@/components/shared/AccountManagerPlaceholder";

export default function FieldAuditorsTable() {
	const { getUsers, getFieldAuditors } = useUserManagement();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["fieldAuditors", currentPage, search],
		queryFn: async () => {
			const response = await getFieldAuditors(currentPage, search);

			return response;
		},
		gcTime: 0,
		retry: false,
	});

	return (
		<div className="h-full flex flex-col">
			<FieldAuditorsTableActions setSearch={setSearch} />
			<div className="grow w-full overflow-auto xl:overflow-visible">
				<table className="w-[250%] md:w-[150%] xl:w-full" cellPadding={15}>
					<thead className="border-b border-t border-[#C7C7C7] border-t-[#C7C7C7] bg-[#f5f5f5]">
						<tr>
							<th>
								<div>
									<AppCheckbox name="check-all" />
								</div>
							</th>
							<th className="text-left">
								<span className="text-2xl font-semibold">Name</span>
							</th>
							<th className="w-[215px] text-left">
								<span className="text-2xl font-semibold w-full">Address</span>
							</th>
							<th className="text-left">
								<span className="text-2xl font-semibold">Phone</span>
							</th>
							<th className="text-left">
								<span className="text-2xl font-semibold">Email</span>
							</th>
							<th className="text-left">
								<span className="text-2xl font-semibold">Active</span>
							</th>
							<th className="text-center"></th>
						</tr>
					</thead>
					<tbody>
						{isLoading || isFetching
							? Array(5)
									.fill("")
									.map((d, ind) => <AccountManagerPlaceholder key={ind} />)
							: //@ts-ignore
							  data?.data?.map((d, ind) => (
									<tr
										key={ind}
										className="border-b-[#E6E6E6] border-b 
                        ">
										<td className="text-center">
											<div>
												<AppCheckbox name="check-all" />
											</div>
										</td>
										<td className="text-center">
											<div className="flex items-center gap-3">
												<Image
													className="w-[30px] h-[30px] rounded-full object-cover"
													width={30}
													height={30}
													alt="poster-track"
													src={
														d.profilePicture
															? d.profilePicture
															: "/no-avatar.svg"
													}
												/>
												<span className="text-2xl font-medium w-max max-w-[130px] truncate">
													{d.firstname} {d.lastname}
												</span>
											</div>
										</td>
										<td className="">
											<span className="text-2xl font-medium">{d.address}</span>
										</td>
										<td className="text-left">
											<span className="text-2xl font-medium">{d.phone}</span>
										</td>
										<td>
											<span className="block text-2xl font-medium w-max max-w-[130px] truncate">
												{d.email}
											</span>
										</td>
										<td className="">
											<DeactivateFieldAuditor user={d} userId={d.id} asSwitch />
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
													<EditFieldAuditor
														fieldAuditor={d}
														currentPage={currentPage}
													/>,
													<DeactivateFieldAuditor user={d} userId={d.id} />,
													<ResetFieldAuditorPassword />,
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
				{!isLoading && (
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				)}
			</div>
		</div>
	);
}
