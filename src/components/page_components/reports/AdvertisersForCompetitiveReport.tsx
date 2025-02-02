"use client";
import SearchInput from "@/components/shared/SearchInput";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AdvertisersForCompetitiveReport() {
	return (
		<>
			<section className="flex flex-col gap-y-5 md:flex-row md:items-center justify-between">
				<span className="text-[17px] font-medium text-[#4F4F4F">
					Select an advertiser to view their competitive report
				</span>
				<SearchInput background="transparent" borderColor="#B3B3B3" />
			</section>
			<section className="grid md:grid-cols-3 gap-7 my-10">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
					<Link
						key={index}
						href={"/reports/competitive/djdd"}
						className="w-full rounded-2xl p-5 border-[1.5px] border-[#E2E2E2] bg-white flex items-center gap-5">
						<Image
							className="w-[50px] h-[50px] rounded-full object-cover"
							width={50}
							height={50}
							alt="poster-track"
							src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						/>
						<span className="text-[15px] font-semibold">ABC Company</span>
					</Link>
				))}
			</section>
		</>
	);
}
