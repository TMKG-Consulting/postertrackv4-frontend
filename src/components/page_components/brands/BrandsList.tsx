"use client";
import React, { useState } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import useCredentials from "@/hooks/useCredentials";
import { ApiInstance } from "@/utils";
import Pagination from "@/components/shared/Pagination";
import { Advertiser, Brand } from "@/types";

export default function BrandsList() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["brandsAndAdvertisers", currentPage],
		queryFn: async () => {
			const res = await ApiInstance.get(`/api/brands?page=${currentPage}`, {
				headers: {
					"auth-token": accessToken,
				},
			});

			return res.data;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	return (
		<>
			<section className="grid md:grid-cols-3 gap-7 my-10">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((d, i) => (
							<div
								key={i}
								className="w-full h-[100px] bg-[#e5e5e5] animate-pulse rounded-2xl"></div>
					  ))
					: //@ts-ignore
					  data.data?.map((item: Brand, index) => {
							return (
								<div
									key={index}
									className="w-full rounded-2xl p-5 border-[1.5px] border-[#E2E2E2] bg-white flex items-center gap-5">
									<Image
										className="w-[50px] h-[50px] rounded-full object-cover"
										width={50}
										height={50}
										alt="poster-track"
										src={item.logo ? item.logo : "/no-avatar.svg"}
									/>
									<div className="flex flex-col gap-y-1">
										<span className="text-[17px] font-semibold">
											{item.name}
										</span>
										{/* @ts-ignore */}
										<span className="text-[15px]">{item.advertiser.name}</span>
									</div>
								</div>
							);
					  })}
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
