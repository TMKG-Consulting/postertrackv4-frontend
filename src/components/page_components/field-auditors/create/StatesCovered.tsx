"use client";
import CloseIcon from "@/components/shared/icons/CloseIcon";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { ApiInstance } from "@/utils";
import useCredentials from "@/hooks/useCredentials";
import { State } from "@/types";

export default function StatesCovered({
	selectedStates,
	addState,
	removeState,
}: {
	selectedStates: number[];
	addState: (val: number) => void;
	removeState(val: number): void;
}) {
	const { accessToken } = useCredentials();

	const { data, isLoading } = useQuery({
		queryKey: ["states"],
		queryFn: async () => {
			const response = await ApiInstance.get("/api/states", {
				headers: {
					"auth-token": accessToken,
				},
			});

			return response.data;
		},
		gcTime: Infinity,
	});

	return (
		<div className="w-full flex flex-col gap-y-5">
			<span className="text-2xl font-semibold">States Covered</span>
			<div className="flex items-center flex-wrap gap-3">
				{isLoading
					? Array(30)
							.fill("")
							.map((d, index) => (
								<button
									key={index}
									className="p-3 w-[90px] h-[34px] rounded-xl flex items-center gap-3 bg-[#e2e2e2] animate-pulse text-2xl"
									type="button"></button>
							))
					: data.map((d: State, index: number) => {
							// @ts-ignore
							const isSelected = selectedStates.includes(d.id);
							return (
								<button
									key={index}
									onClick={() => {
										if (isSelected) {
											removeState(d.id!);
										} else {
											addState(d.id!);
										}
									}}
									className={`p-3 min-w-[90px] w-max h-[34px] rounded-xl flex items-center justify-center gap-3 ${
										isSelected
											? "bg-primary text-white border-primary"
											: "border-[#E9E9E9]"
									} border-[1.5px] text-2xl`}
									type="button">
									{d?.name}
									{isSelected && (
										<CloseIcon width="14" height="14" fill="white" />
									)}
								</button>
							);
					  })}
			</div>
		</div>
	);
}
