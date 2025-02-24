"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance, debounce } from "@/utils";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";
import SearchIcon from "@/components/shared/icons/SearchIcon";

export default function ClientAdvertiserName() {
	const { accessToken } = useCredentials();
	const dropdownContentRef = useRef(null);
	const [isAtBottom, setIsAtBottom] = useState(false);

	const { values, setFieldValue } = useFormikContext<Client>();
	const [currentPage, setCurrentPage] = useState(1);
	const [advertisers, setAdvertisers] = useState<any>([]);
	const [search, setSearch] = useState("");
	const [hasSearchResult, setHasSearchResult] = useState(false);

	const { data, error, isFetching } = useQuery({
		queryKey: ["advertisers", currentPage, search],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/api/advertisers?page=${currentPage}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
	});

	useEffect(() => {
		if (data && search === "") {
			if (hasSearchResult) {
				// @ts-ignore
				setAdvertisers((prev) => [...data.data]);
			} else {
				// @ts-ignore
				setAdvertisers((prev) => [...prev, ...data.data]);
			}
			setHasSearchResult(false);
		} else if (data && search !== "") {
			setHasSearchResult(true);
			// @ts-ignore
			setAdvertisers(data.data);
		}
	}, [data, search, hasSearchResult]);

	useEffect(() => {
		if (values.advertiser) {
			// @ts-ignore
			setAdvertisers((prev) => [...prev, values.advertiser]);
		}
	}, []);

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
				items={advertisers}
				renderButton={({ setOpen, open }) => (
					<div className="w-full flex flex-col gap-y-5">
						<span className="text-2xl font-semibold">Name</span>
						<button
							type="button"
							onClick={() => setOpen(!open)}
							className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
							{values.name === "" && (
								<span className="text-2xl text-[#8D8D8D]">
									Select Advertiser's Name
								</span>
							)}
							{values.name !== "" && (
								<span className="text-2xl text-appBlack">
									{/* @ts-ignore */}
									{advertisers.find((d) => d.id === Number(values.name))?.name}
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
							setFieldValue("name", item.id);
							setOpen(false);
						}}
						className="text-left py-5 text-2xl px-8 border-b border-b-[#cacaca] font-medium last:border-b-0 hover:bg-[#f5f5f5]"
						type="button">
						{/* @ts-ignore */}
						{item.name}
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
				name="name"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
