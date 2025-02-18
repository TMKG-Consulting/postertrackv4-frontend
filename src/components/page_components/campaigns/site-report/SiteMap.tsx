"use client";
import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";

export default function SiteMap({ height = "280px" }: { height?: string }) {
	const { reportBeingViewed } = useSiteStore();
	const LatLng = JSON.parse(reportBeingViewed?.geolocations!);

	return (
		<section style={{ height }}>
			<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<Map
					style={{ width: "100%", height: "100%" }}
					center={{ lat: LatLng[0].latitude, lng: LatLng[0].longitude }}
					defaultZoom={15}
					gestureHandling={"greedy"}
					disableDefaultUI={false}>
					<Marker
						position={{ lat: LatLng[0].latitude, lng: LatLng[0].longitude }}
					/>
				</Map>
			</APIProvider>
		</section>
	);
}
