import React from "react";
import Image from "next/image";

export default function DashboardHeader() {
	return (
		<section className="w-full h-[10rem] flex items-center justify-between">
			<h4 className="text-[2.5rem] md:text-[3rem] font-black">Hello, Emmanuel</h4>
			<Image
				className="w-[50px] h-[50px] rounded-full object-cover"
				width={50}
				height={50}
				alt="poster-track"
				src="https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
			/>
		</section>
	);
}
