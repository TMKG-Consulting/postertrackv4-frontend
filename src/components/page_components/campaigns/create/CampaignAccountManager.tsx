"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { CampaignCreateData, Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";
import useUserManagement from "@/hooks/useUserManagement";
import AppButton from "@/components/shared/AppButton";
import SearchIcon from "@/components/shared/icons/SearchIcon";
import { debounce } from "@/utils";

export default function CampaignAccountManager() {
	const { values, setFieldValue } = useFormikContext<CampaignCreateData>();
	const dropdownContentRef = useRef(null);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [search, setSearch] = useState("");

	const { getAccountManagers } = useUserManagement();
	const [currentPage, setCurrentPage] = useState(1);
	const [accountManagers, setAccountManagers] = useState<any[]>([]);
	const [hasSearchResult, setHasSearchResult] = useState(false);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["accountManagers", currentPage, search],
		queryFn: async () => {
			const response = await getAccountManagers(currentPage, search);

			return response;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	useEffect(() => {
		if (data && search === "") {
			if (hasSearchResult) {
				// @ts-ignore
				setAccountManagers((prev) => [...data.data]);
			} else {
				// @ts-ignore
				setAccountManagers((prev) => [...prev, ...data.data]);
			}
			setHasSearchResult(false);
		} else if (data && search !== "") {
			setHasSearchResult(true);
			// @ts-ignore
			setAccountManagers(data.data);
		}
	}, [data, search, hasSearchResult]);

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

	const searchHandler = debounce(function (val) {
		setCurrentPage(1);
		setSearch(val);
	}, 500);

	return (
		<div className="w-full">
			<Dropdown
				top={-100}
				items={accountManagers}
				renderButton={({ setOpen, open }) => (
					<div className="w-full flex flex-col gap-y-5">
						<span className="text-2xl font-semibold">Account Manager</span>
						<button
							type="button"
							onClick={() => setOpen(!open)}
							className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
							{values.accountManagerId === "" && (
								<span className="text-2xl text-[#8D8D8D]">
									Select Account Manager
								</span>
							)}
							{values.accountManagerId !== "" && (
								<span className="text-2xl text-appBlack">
									{
										accountManagers.find(
											/* @ts-ignore */
											(d) => d.id === Number(values.accountManagerId)
										)?.firstname
									}{" "}
									{
										accountManagers.find(
											/* @ts-ignore */
											(d) => d.id === Number(values.accountManagerId)
										)?.lastname
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
							setFieldValue("accountManagerId", item.id);
							setOpen(false);
						}}
						className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0 hover:bg-[#f5f5f5]"
						type="button">
						{/* @ts-ignore */}
						{item.firstname} {item.lastname}
					</button>
				)}
				renderHeader={({ setOpen, open }) => (
					<div className="py-5 flex items-center justify-center sticky top-0 bg-white">
						<div className="w-[255px] h-[45px] flex items-center px-5 bg-[#F5F5F5] rounded-xl transiton-all duration-200 focus-within:!border-primary border-transparent border-[1.5px] gap-x-3">
							<SearchIcon />
							<input
								type="text"
								placeholder="Search"
								className="grow h-full outline-0 bg-transparent text-2xl"
								name="search"
								onChange={(e) => searchHandler(e.target.value)}
							/>
						</div>
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
				name="accountManagerId"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
