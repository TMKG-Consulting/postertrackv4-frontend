import LocationsProvider from "@/components/shared/providers/LocationsProvider";
import React from "react";
import { ApiInstance } from "@/utils";
import { cookies } from "next/headers";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/constants";

export default async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookiesStore = await cookies();
	//@ts-ignore
	let states = [];
	//@ts-ignore
	let regions = [];
	//@ts-ignore
	let cities = [];

	if (cookiesStore.has(ACCESS_TOKEN_COOKIE_NAME)) {
		const statesRes = await ApiInstance.get("/api/states", {
			headers: {
				"auth-token": cookiesStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
			},
		});

		const regionsRes = await ApiInstance.get("/api/regions", {
			headers: {
				"auth-token": cookiesStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
			},
		});

		const citiesRes = await ApiInstance.get("/api/cities", {
			headers: {
				"auth-token": cookiesStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
			},
		});

		states = statesRes.data;
		regions = regionsRes.data;
		cities = citiesRes.data;
	}

	return (
		//@ts-ignore
		<LocationsProvider
			states={states}
			cities={cities}
			regions={regions}
			//@ts-ignore
			statesToShowByRegion={regions.map((r) => r.id)}
			//@ts-ignore
			citiesToShowByState={states.map((s) => s.id)}>
			{children}
		</LocationsProvider>
	);
}
