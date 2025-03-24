"use client";
import React, { useEffect, useState } from "react";
import { APIProvider, Map, Marker, Pin } from "@vis.gl/react-google-maps";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import useCredentials from "@/hooks/useCredentials";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { CompetitiveUpload } from "@/types";
import { ApiInstance, getHumanReadableAddress } from "@/utils";
import AppLoader from "@/components/shared/AppLoader";
import Portal from "@/components/shared/Portal";

const advertiserPin = {
	path: "M32 10.328c-8.284 0-15 6.716-15 15 0 6.605 9.537 21.113 13.402 26.723.872 1.265 2.324 1.265 3.196 0C37.463 46.44 47 31.934 47 25.328c0-8.284-6.716-15-15-15zm0 7a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z",
	fillColor: "#ED3237",
	fillOpacity: 1,
	strokeWeight: 0,
	rotation: 0,
	scale: 1,
};

const competitorPin = {
	path: "M32 10.328c-8.284 0-15 6.716-15 15 0 6.605 9.537 21.113 13.402 26.723.872 1.265 2.324 1.265 3.196 0C37.463 46.44 47 31.934 47 25.328c0-8.284-6.716-15-15-15zm0 7a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z",
	fillColor: "#032068",
	fillOpacity: 1,
	strokeWeight: 0,
	rotation: 0,
	scale: 1,
};

export default function CompetitiveAnalysisMap() {
	const router = useRouter();
	const params = useParams();
	const { accessToken } = useCredentials();
	const [currentPage, setCurrentPage] = useState(1);
	const [search, setSearch] = useState("");
	const [dataToDisplay, setDataToDisplay] = useState<CompetitiveUpload[]>([]);
	const [competitorData, setCompetitorData] = useState<CompetitiveUpload[]>([]);

	const { data, isLoading, error, isFetching } = useQuery({
		queryKey: ["advertisers", currentPage, search, params.advertiserId],
		queryFn: async () => {
			const response = await ApiInstance.get(
				`/competitive-map/${params.advertiserId}?page=${currentPage}&search=${search}`,
				{
					headers: {
						"auth-token": accessToken,
					},
				}
			);

			return response.data;
		},
		placeholderData: keepPreviousData,
		retry: false,
	});

	useEffect(() => {
		if (data) {
			if (data.advertiserHasComplianceReport) {
				setDataToDisplay(data.advertiserComplianceData);
			} else {
				setDataToDisplay(data.advertiserCompetitiveData);
			}

			setCompetitorData(data.competitorData);
		}
	}, [data]);

	// useEffect(() => {
	// 	if (dataToDisplay.length > 0) {
	// 		(async function () {
	// 			const newData = await Promise.all(
	// 				dataToDisplay.map(async (d) => {
	// 					const LatLng = JSON.parse(d?.geolocations);
	// 					const address = await getHumanReadableAddress({
	// 						lat: LatLng[0].latitude,
	// 						lng: LatLng[0].longitude,
	// 					});

	// 					return { ...d, address };
	// 				})
	// 			);

	// 			setDataToDisplay(newData);
	// 		})();
	// 	}
	// }, [dataToDisplay]);

	if (isLoading) {
		return (
			<div className="w-full h-full flex items-center justify-center">
				<AppLoader />
			</div>
		);
	}

	let LatLng: any;

	if (dataToDisplay.length > 0) {
		LatLng = JSON.parse(dataToDisplay[0]?.geolocations);
	} else if (dataToDisplay.length > 0) {
		LatLng = JSON.parse(competitorData[0]?.geolocations);
	}

	console.log(LatLng);

	return (
		<>
			<Portal elementId="advertiser-name">
				{dataToDisplay.length > 0 && (
					<>
						<span className="text-2xl font-medium">
							{dataToDisplay[0]?.advertiser.name}
						</span>
					</>
				)}
			</Portal>
			<APIProvider apiKey={`${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}>
				<Map
					style={{ width: "100%", height: "70vh" }}
					center={{
						lat: LatLng ? LatLng[0]?.latitude ?? 0 : 0,
						lng: LatLng ? LatLng[0]?.longitude ?? 0 : 0,
					}}
					defaultZoom={15}
					gestureHandling={"auto"}
					disableDefaultUI={false}>
					{dataToDisplay.map((d, i) => {
						const location = JSON.parse(d?.geolocations);
						return (
							<Marker
								key={i}
								position={{
									lat: location[0].latitude,
									lng: location[0].longitude,
								}}
								icon={advertiserPin}></Marker>
						);
					})}

					{competitorData.map((d, i) => {
						const location = JSON.parse(d?.geolocations);
						return (
							<Marker
								key={i}
								position={{
									lat: location[0].latitude,
									lng: location[0].longitude,
								}}
								icon={competitorPin}></Marker>
						);
					})}
				</Map>
			</APIProvider>
		</>
	);
}
