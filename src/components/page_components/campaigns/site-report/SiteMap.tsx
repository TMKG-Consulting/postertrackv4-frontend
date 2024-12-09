"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function SiteMap() {
	return (
		<section className="h-[280px]">
			<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<Map
					style={{ width: "100%", height: "100%" }}
					center={{ lat: 53.54992, lng: 10.00678 }}
					defaultZoom={15}
					gestureHandling={"greedy"}
					disableDefaultUI={false}
				/>
			</APIProvider>
		</section>
	);
}
