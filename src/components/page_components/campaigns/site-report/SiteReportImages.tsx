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
		<div className="flex flex-col gap-y-8 w-full ">
			{currentImage && (
				<div className="w-full h-[470px] overflow-hidden rounded-2xl ">
					<Image
						src={""}
						overrideSrc={currentImage}
						width={565}
						height={470}
						alt="poster-track"
						className="w-full h-full "
					/>
				</div>
			)}
			<div className="flex items-center gap-8">
				{reportBeingViewed?.imageUrls.map((image, i) => (
					<button
						onClick={() => setCurrentImage(image)}
						className={` ${
							currentImage === image ? "border-primary border-[2px]" : ""
						} rounded-2xl overflow-hidden`}
						key={i}>
						<Image
							src={""}
							width={565}
							overrideSrc={image}
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
