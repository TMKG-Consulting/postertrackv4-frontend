import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ApiInstance = axios.create({
	baseURL: BASE_URL,
});

const loader = new Loader({
	apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
	version: "weekly",
	libraries: ["geocoding"],
});

export function debounce(func: (...args: any[]) => void, delay: number) {
	let timeoutId: any;
	return function (...args: any[]) {
		// @ts-ignore
		const context = this;

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			// @ts-ignore
			func.apply(context, args);
		}, delay);
	};
}

export async function getHumanReadableAddress(location: {
	lat: number;
	lng: number;
}) {
	const { Geocoder } = await loader.importLibrary("geocoding");

	const geocoder = new Geocoder();

	const result = await geocoder.geocode({
		location,
	});

	return result.results[0].formatted_address;
}
