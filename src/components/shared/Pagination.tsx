"use client";
import React from "react";
import ChevronIcon from "./icons/ChevronIcon";

export default function Pagination() {
	return (
		<div className="w-max flex items-center gap-x-3 md:gap-x-5">
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center rotate-[90deg]">
				<ChevronIcon fill="#140100" />
			</button>
			<button className="bg-primary text-white w-[35px] h-[35px] rounded-lg flex items-center justify-center">
				<span className="text-2xl font-medium">1</span>
			</button>
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center">
				<span className="text-2xl font-medium">2</span>
			</button>
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center">
				<span className="text-2xl font-medium">3</span>
			</button>
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center">
				<span className="text-2xl font-medium">...</span>
			</button>
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center">
				<span className="text-2xl font-medium">24</span>
			</button>
			<button className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center rotate-[-90deg]">
				<ChevronIcon fill="#140100" />
			</button>
		</div>
	);
}
