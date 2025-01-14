"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Image from "next/image";
import AppButton from "@/components/shared/AppButton";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className="w-full h-full flex flex-col items-center justify-center bg-white">
			<Image
				alt="postertrack"
				src={"/error.jpg"}
				width={500}
				height={500}
				priority
			/>
			<h2 className="text-4xl font-bold">Oops! Something went wrong!</h2>
			<p className="text-2xl text-[#666666]">
				Our technical team is working on it.
			</p>
			<AppButton onClick={reset} className="!w-[200px] mt-10 font-medium">
				Try again
			</AppButton>
		</div>
	);
}
