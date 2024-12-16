"use client";
import React from "react";
import SearchIcon from "./icons/SearchIcon";

export default function SearchInput({
	background = "#f5f5f5",
	borderColor = "transparent",
}) {
	return (
		<div
			style={{ background, borderColor }}
			className="w-[255px] h-[45px] flex items-center px-5 bg-[#F5F5F5] rounded-xl transiton-all duration-200 focus-within:!border-primary border-transparent border-[1.5px] gap-x-3">
			<SearchIcon />
			<input
				type="text"
				placeholder="Search"
				className="grow h-full outline-0 bg-transparent text-2xl"
			/>
		</div>
	);
}
