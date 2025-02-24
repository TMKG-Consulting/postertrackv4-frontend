"use client";
import React, { useState, useEffect, useRef } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";

export default function ClientAdvertiserName() {
	const { accessToken } = useCredentials();
	const dropdownContentRef = useRef(null);
	const [isAtBottom, setIsAtBottom] = useState(false);

	const { values, setFieldValue } = useFormikContext<Client>();
	const [currentPage, setCurrentPage] = useState(1);
	const [advertisers, setAdvertisers] = useState<any>([]);
	const [search, setSearch] = useState("");

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
		if (data) {
			// @ts-ignore
			setAdvertisers((prev) => [...prev, ...data.data]);
		}
	}, [data]);

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
				name="name"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
