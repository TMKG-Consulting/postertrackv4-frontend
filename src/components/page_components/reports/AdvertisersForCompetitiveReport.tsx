"use client";
import SearchInput from "@/components/shared/SearchInput";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { Advertiser } from "@/types";
import Pagination from "@/components/shared/Pagination";

export default function AdvertisersForCompetitiveReport() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");

	const { data, isLoading, error, isFetching } = useQuery({
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
		placeholderData: keepPreviousData,
		retry: false,
	});

	return (
		<>
			<section className="flex flex-col gap-y-5 md:flex-row md:items-center justify-between">
				<span className="text-[17px] font-medium text-[#4F4F4F">
					Select an advertiser to view their competitive report
				</span>
				<SearchInput
					setSearch={setSearch}
					background="transparent"
					borderColor="#B3B3B3"
				/>
			</section>
			<section className="grid md:grid-cols-3 gap-7 my-10">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
							<div
								key={d}
								className="h-[60px] w-full bg-[#eaeaea] animate-pulse rounded-2xl"></div>
					  ))
					: data.data
							.sort((a: Advertiser, b: Advertiser) =>
								a.name.toLowerCase().localeCompare(b.name.toLowerCase())
							)
							.map((d: Advertiser, i: number) => (
								<Link
									key={i}
									href={`/reports/competitive/${d.id}`}
									className="w-full rounded-2xl p-5 border-[1.5px] border-[#E2E2E2] bg-white flex items-center gap-5">
									<span className="text-[15px] font-semibold">{d.name}</span>
								</Link>
							))}
			</section>
			<section>
				<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
					<Pagination
						currentPage={currentPage}
						totalPages={data?.totalPages}
						setCurrentPage={setCurrentPage}
					/>
				</div>
			</section>
		</>
	);
}
