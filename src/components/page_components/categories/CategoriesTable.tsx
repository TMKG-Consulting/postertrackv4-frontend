"use client";
import React, { useState } from "react";
import Pagination from "@/components/shared/Pagination";
import Dropdown from "@/components/shared/Dropdown";
import Kebab from "@/components/shared/icons/Kebab";
import { useQuery } from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import CategoriesTableActions from "./CategoriesTableAction";

export default function CategoriesTable() {
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["categories", currentPage],
		queryFn: async () => {
			const response = await ApiInstance.get("/api/categories", {
				headers: {
					"auth-token": accessToken,
				},
			});

			return response.data;
		},
	});

	return (
		<div className="h-full flex flex-col">
			<CategoriesTableActions />
			<div className="grow w-full flex flex-col px-8">
				{isLoading || isFetching
					? [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((d, i) => (
							<div key={i} className=" py-[10px] border-b border-b-gray-100">
								<div className="bg-[#e5e5e5] anaimate-pulse h-[7px] rounded-full w-[100px]  mb-2"></div>
								<div className="bg-[#e5e5e5] anaimate-pulse h-[7px] rounded-full w-[50px]"></div>
							</div>
					  ))
					: //@ts-ignore
					  data.data.map((d, i) => (
							<div
								className="text-[1.7rem] py-[10px] border-b border-b-gray-100 font-medium"
								key={i}>
								<span>{d.name}</span>
							</div>
					  ))}
			</div>
			<div className="my-12 flex items-center justify-center md:justify-end px-5 md:px-10">
				{!isLoading && !isFetching && (
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
