"use client";
import React, { useState } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { CampaignCreateData, Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";
import useUserManagement from "@/hooks/useUserManagement";

export default function CampaignClient() {
	const { values, setFieldValue } = useFormikContext<CampaignCreateData>();

	const { getClients } = useUserManagement();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["clients", currentPage],
		queryFn: async () => {
			const response = await getClients(currentPage);

			return response;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	return (
		<div className="w-full">
			<Dropdown
				top={-100}
				items={isLoading ? [1] : data.data}
				renderButton={({ setOpen, open }) => (
					<div className="w-full flex flex-col gap-y-5">
						<span className="text-2xl font-semibold">Client</span>
						<button
							type="button"
							onClick={() => setOpen(!open)}
							className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
							{values.clientId === "" && (
								<span className="text-2xl text-[#8D8D8D]">Select Client</span>
							)}
							{values.clientId !== "" && (
								<span className="text-2xl text-appBlack">
									{
										/* @ts-ignore */
										data?.data.find((d) => d.id === Number(values.clientId))
											?.advertiserId
									}
								</span>
							)}
							<ChevronIcon fill={"#8D8D8D"} />
						</button>
					</div>
				)}
				renderItem={({ item, index, setOpen }) =>
					isLoading ? (
						<div
							key={index}
							className="h-[200px] items-center justify-center flex">
							<AppLoader />
						</div>
					) : (
						<button
							key={index}
							onClick={() => {
								//@ts-ignore
								setFieldValue("clientId", item.id);
								setOpen(false);
							}}
							className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0 hover:bg-[#f5f5f5]"
							type="button">
							{/* @ts-ignore */}
							{item.advertiserId}
						</button>
					)
				}
				renderHeader={({ setOpen, open }) => (
					<div className="py-5 flex items-center justify-center sticky top-0 bg-white">
						<SearchInput />
					</div>
				)}
			/>
			<ErrorMessage
				name="clientId"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
