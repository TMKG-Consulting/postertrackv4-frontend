"use client";
import React, { useState, useRef, useEffect } from "react";
import Dropdown from "@/components/shared/Dropdown";
import ChevronIcon from "@/components/shared/icons/ChevronIcon";
import { useQuery } from "@tanstack/react-query";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import { ErrorMessage, useFormikContext } from "formik";
import AppLoader from "@/components/shared/AppLoader";
import { Brand, Client } from "@/types";
import SearchInput from "@/components/shared/SearchInput";

export default function BrandCategory() {
	const { accessToken } = useCredentials();
	const dropdownContentRef = useRef(null);
	const [isAtBottom, setIsAtBottom] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState<any>([]);

	const { values, setFieldValue } = useFormikContext<Brand>();

	const { data, error, isFetching } = useQuery({
		queryKey: ["categories", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get(
				"/api/categories?page=" + currentPage,
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
			setCategories((prev) => [...prev, ...data.data]);
		}
	}, [data]);

	useEffect(() => {
		if (values.category) {
			// @ts-ignore
			setCategories((prev) => [...prev, values.category]);
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
				items={categories}
				renderButton={({ setOpen, open }) => (
					<div className="w-full flex flex-col gap-y-5">
						<span className="text-2xl font-semibold">Category</span>
						<button
							type="button"
							onClick={() => setOpen(!open)}
							className="w-full h-[50px] rounded-xl bg-[#F5F5F5] px-8 flex items-center justify-between">
							{values.categoryId === "" && (
								<span className="text-2xl text-[#8D8D8D]">Select Category</span>
							)}
							{values.categoryId !== "" && (
								<span className="text-2xl text-appBlack">
									{
										// @ts-ignore
										categories.find((d) => d.id === Number(values.categoryId))
											?.name
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
							setFieldValue("categoryId", item.id);
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
						<SearchInput />
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
				name="categoryId"
				component={"p"}
				className="text-2xl font-medium text-red-400"
			/>
		</div>
	);
}
