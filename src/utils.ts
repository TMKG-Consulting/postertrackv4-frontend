import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const ApiInstance = axios.create({
	baseURL: BASE_URL,
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
