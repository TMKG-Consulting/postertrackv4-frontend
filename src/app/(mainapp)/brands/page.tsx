import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/components/shared/SearchInput";
import BrandHeader from "@/components/page_components/brands/BrandHeader";

export default function page() {
	return (
		<>
			<BrandHeader />
			<section className="flex items-center justify-end">
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
						<div className="flex flex-col gap-y-1">
							<span className="text-[17px] font-semibold">ABC Company</span>
							<span className="text-[15px]">Nigerian Brewery</span>
						</div>
					</Link>
				))}
			</section>
		</>
	);
}
