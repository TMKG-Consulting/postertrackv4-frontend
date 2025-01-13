"use client";
import React from "react";
import ChevronIcon from "./icons/ChevronIcon";

interface PaginationProps {
	totalPages: number;
	currentPage: number;
	setCurrentPage(page: number): void;
}

export default function Pagination({
	totalPages,
	currentPage,
	setCurrentPage,
}: PaginationProps) {
	const generatePagination = () => {
		const pages = [];
		const pageRange = 3; // Adjust to show more/less pages around the current page
		const leftRange = Math.max(currentPage - pageRange, 2);
		const rightRange = Math.min(currentPage + pageRange, totalPages - 1);

		pages.push(1); // First page
		if (leftRange > 2) pages.push("..."); // Ellipsis for skipped pages

		for (let i = leftRange; i <= rightRange; i++) {
			pages.push(i);
		}

		if (rightRange < totalPages - 1) pages.push("..."); // Ellipsis for skipped pages
		if (totalPages > 1) {
			pages.push(totalPages); // Last page
		}

		return pages;
	};

	return (
		<div className="w-max flex items-center gap-x-3 md:gap-x-5">
			<button
				onClick={() => setCurrentPage(currentPage - 1)}
				disabled={currentPage === 1}
				className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center rotate-[90deg] disabled:cursor-not-allowed">
				<ChevronIcon fill="#140100" />
			</button>

			{generatePagination().map((d, i) => (
				<button
					key={i}
					// @ts-ignore
					onClick={() => d !== "..." && setCurrentPage(d)}
					className={`${
						currentPage === d
							? "bg-primary text-white"
							: "bg-[#f2f2f2] text-appBlack"
					}  w-[35px] h-[35px] rounded-lg flex items-center justify-center`}>
					<span className="text-2xl font-medium ">{d}</span>
				</button>
			))}

			<button
				onClick={() => setCurrentPage(currentPage + 1)}
				className="bg-[#F2F2F2] w-[35px] h-[35px] rounded-lg flex items-center justify-center rotate-[-90deg] disabled:cursor-not-allowed"
				disabled={currentPage === totalPages}>
				<ChevronIcon fill="#140100" />
			</button>
		</div>
	);
}
