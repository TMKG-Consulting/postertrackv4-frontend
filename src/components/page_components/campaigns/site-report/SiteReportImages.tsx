"use client";
import Image from "next/image";
import React from "react";

export default function SiteReportImages() {
	return (
		<div className="flex flex-col gap-y-8 w-full">
			<Image
				src={
					"https://images.unsplash.com/photo-1533069027836-fa937181a8ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				}
				width={565}
				height={370}
				alt="poster-track"
				className="w-full object-cover"
			/>
			<div className="flex items-center gap-8">
				<button>
					<Image
						src={
							"https://images.unsplash.com/photo-1533069027836-fa937181a8ce?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={565}
						height={370}
						alt="poster-track"
						className="w-[90px] h-[60px] object-cover"
					/>
				</button>
				<button>
					<Image
						src={
							"https://plus.unsplash.com/premium_photo-1680859126164-ac4fd8f56625?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={565}
						height={370}
						alt="poster-track"
						className="w-[90px] h-[60px] object-cover"
					/>
				</button>
				<button>
					<Image
						src={
							"https://images.unsplash.com/photo-1580670029149-5c00eec8bb66?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
						width={565}
						height={370}
						alt="poster-track"
						className="w-[90px] h-[60px] object-cover"
					/>
				</button>
			</div>
		</div>
	);
}
