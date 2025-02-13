"use client";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SiteReportImages() {
	const { reportBeingViewed } = useSiteStore();
	const [currentImage, setCurrentImage] = useState<string>("");

	useEffect(() => {
		if (reportBeingViewed && currentImage === "") {
			setCurrentImage(reportBeingViewed.imageUrls[0]);
		}
	}, [reportBeingViewed]);

	return (
		<div className="flex flex-col gap-y-8 w-full">
			{currentImage && (
				<Image
					src={currentImage}
					width={565}
					height={370}
					alt="poster-track"
					className="w-full object-cover"
				/>
			)}
			<div className="flex items-center gap-8">
				{reportBeingViewed?.imageUrls.map((image, i) => (
					<button
						className={` ${
							currentImage === image ? "border-primary border-[2px]" : ""
						} rounded-2xl overflow-hidden`}
						key={i}>
						<Image
							src={image}
							width={565}
							height={370}
							alt="poster-track"
							className="w-[90px] h-[60px] object-cover"
						/>
					</button>
				))}
			</div>
		</div>
	);
}
