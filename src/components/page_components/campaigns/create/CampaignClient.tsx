"use client";
import React, { useEffect, useState, useRef } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { CampaignCreateData, Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";
import useUserManagement from "@/hooks/useUserManagement";
import AppButton from "@/components/shared/AppButton";

export default function CampaignClient() {
	const { values, setFieldValue } = useFormikContext<CampaignCreateData>();
	const dropdownContentRef = useRef(null);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [search, setSearch] = useState("");

	const { getClients } = useUserManagement();
	const [currentPage, setCurrentPage] = useState(1);
	const [clients, setClients] = useState<any>([]);

	const { data, error, isFetching } = useQuery({
		queryKey: ["clients", currentPage, search],
		queryFn: async () => {
			const response = await getClients(currentPage, search);

			return response;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	useEffect(() => {
		if (data) {
			setClients(data.data);
		}
	}, [data]);

	const handleScroll = () => {
		const container = dropdownContentRef.current;

		if (container) {
			const { scrollTop, scrollHeight, clientHeight } = container;

			// Check if the user has scrolled to the bottom
			if (scrollTop + clientHeight >= scrollHeight) {
				setIsAtBottom(true);
			} else {
				setIsAtBottom(false);
			}
		}
	};

	useEffect(() => {
		if (isAtBottom && currentPage < data?.totalPages) {
			setIsAtBottom(false);
			setCurrentPage(currentPage + 1);
		}
	}, [isAtBottom, currentPage, data]);

	return (
		<div className="w-full">
			<Dropdown
				top={-100}
				items={clients}
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
										clients.find((d) => d.id === Number(values.clientId))
											?.advertiser.name
									}
								</span>
							)}
							<ChevronIcon fill={"#8D8D8D"} />
						</button>
					</div>
				)}
				renderItem={({ item, index, setOpen }) => (
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
						{item.advertiser.name}
					</button>
				)}
				renderHeader={({ setOpen, open }) => (
					<div className="py-5 flex items-center justify-center sticky top-0 bg-white">
						<SearchInput setSearch={setSearch} />
					</div>
				)}
				renderFooter={() => (
					<div className="py-5 flex items-center justify-center bg-white ">
						{isFetching && <AppLoader size={24} />}
					</div>
				)}
				dropdownContentRef={dropdownContentRef}
				handleContentScroll={handleScroll}
			/>
			<ErrorMessage
				name="clientId"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
