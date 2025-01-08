import { NextResponse, NextRequest } from "next/server";
import { ApiInstance } from "./utils";
import { ACCESS_TOKEN_COOKIE_NAME } from "./constants";

export async function middleware(request: NextRequest) {
	const response = NextResponse;
	const pathname = request.nextUrl.pathname;
	const authRoutes = ["/auth/login"];
	const accessToken = request.cookies.get(ACCESS_TOKEN_COOKIE_NAME)?.value;
	const isAuthRoute = authRoutes.includes(pathname);

	try {
		if (!accessToken) {
			throw new Error("Unauthenticated");
		}

		await ApiInstance.get("/user/detail", {
			headers: {
				"auth-token": accessToken,
			},
		});

		if (isAuthRoute) {
			return response.redirect(new URL("/", request.url));
		}
	} catch (error) {
		if (isAuthRoute || pathname.startsWith("/auth")) {
			return response.next();
		} else {
			return response.redirect(new URL("/auth/login", request.url));
		}
	}

	return response.next();
}

export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|login-illustration.svg|poster-track-logo.png|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
