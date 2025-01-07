import {
	ACCESS_TOKEN_COOKIE_NAME,
	REFRESH_TOKEN_COOKIE_NAME,
} from "@/constants";
import { useCookieState } from "ahooks";

export const NEVER_EXPIRE_YEARS_IN_MS = 200 * 365 * 24 * 60 * 60 * 1000;

export default function useCredentials() {
	const [accessToken, setAccessToken] = useCookieState(
		ACCESS_TOKEN_COOKIE_NAME,
		{
			//@ts-ignore
			expires: (() => new Date(+new Date() + NEVER_EXPIRE_YEARS_IN_MS))(),
		}
	);

	const [refreshToken, setRefreshToken] = useCookieState(
		REFRESH_TOKEN_COOKIE_NAME,
		{
			//@ts-ignore
			expires: (() => new Date(+new Date() + NEVER_EXPIRE_YEARS_IN_MS))(),
		}
	);

	function setCredentials({
		accessToken,
		refreshToken,
	}: {
		accessToken?: string;
		refreshToken?: string;
	}) {
		if (accessToken) {
			setAccessToken(accessToken);
		}
		if (refreshToken) {
			setRefreshToken(refreshToken);
		}
	}

	function clearAllCredentials() {
		setAccessToken(undefined);
		setRefreshToken(undefined);
	}

	return {
		accessToken,
		refreshToken,
		setCredentials,
		clearAllCredentials,
	};
}
