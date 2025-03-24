"use client";
import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useSiteStore } from "@/components/shared/providers/SiteProvider";
import { useReportStore } from "@/components/shared/providers/ReportsProvider";
import { getHumanReadableAddress } from "@/utils";

export default function CompetitiveSiteMap({
	height = "280px",
}: {
	height?: string;
}) {
	const { reportBeingViewed } = useReportStore();

	if (!reportBeingViewed) {
		return null;
	}

	const LatLng = JSON.parse(reportBeingViewed?.geolocations);

	return (
		<section style={{ height }}>
			<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<Map
					style={{ width: "100%", height: "100%" }}
					center={{ lat: LatLng[0].latitude, lng: LatLng[0].longitude }}
					defaultZoom={15}
					gestureHandling={"greedy"}
					disableDefaultUI={false}>
					{LatLng.map((d: any, i: number) => (
						<Marker key={i} position={{ lat: d.latitude, lng: d.longitude }} />
					))}
				</Map>
			</APIProvider>
		</section>
	);
}
