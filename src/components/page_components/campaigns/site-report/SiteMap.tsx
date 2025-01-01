"use client";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function SiteMap({ height = "280px" }: { height?: string }) {
	return (
		<section style={{ height }}>
			<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<Map
					style={{ width: "100%", height: "100%" }}
					center={{ lat: 6.6017372, lng: 3.3519284 }}
					defaultZoom={15}
					gestureHandling={"greedy"}
					disableDefaultUI={false}
				/>
			</APIProvider>
		</section>
	);
}
