"use client";
import React from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import AppCheckbox from "@/components/shared/AppCheckbox";
import AccountManagersTableActions from "./AccountManagersTableActions";
import Image from "next/image";
import Switch from "@/components/shared/Switch";
import EditAccountManager from "./EditAccountManager";
import DeactivateAccountManager from "./DeactivateAccountManager";
import ResetAccountManagerPassword from "./ResetAccountManagerPassword";
import useUserManagement from "@/hooks/useUserManagement";
import { useQuery } from "@tanstack/react-query";
import AccountManagerPlaceholder from "@/app/AccountManagerPlaceholder";

export default function AccountManagersTable() {
	const { getUsers } = useUserManagement();

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["accountManagers"],
		queryFn: async () => {
			const response = await getUsers();

			return response.filter(
				//@ts-ignore
				(u) =>
					u.role === "ACCOUNT_MANAGER" || u.role === "CHIEF_ACCOUNT_MANAGER"
			);
		},
	});

	return (
		<div className="h-full flex flex-col">
			<AccountManagersTableActions />
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
									.map((d, index) => <AccountManagerPlaceholder key={index} />)
							: //@ts-ignore
							  data.map((d, index) => (
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
											<div className="flex items-center gap-3">
												<Image
													className="w-[30px] h-[30px] rounded-full object-cover"
													width={30}
													height={30}
													alt="poster-track"
													src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
											<Switch isOn={true} />
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
													<EditAccountManager accountManager={d} />,
													<DeactivateAccountManager />,
													<ResetAccountManagerPassword />,
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
				{!isLoading && <Pagination />}
			</div>
		</div>
	);
}
