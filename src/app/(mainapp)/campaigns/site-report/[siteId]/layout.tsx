import SiteProvider from "@/components/shared/providers/SiteProvider";
import React from "react";
import { ApiInstance } from "@/utils";
import { ACCESS_TOKEN_COOKIE_NAME } from "@/constants";
import { cookies } from "next/headers";

export default async function layout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ siteId: string }>;
}>) {
	const cookieStore = await cookies();
	let hasReport = false;
	const siteId = (await params).siteId;
	let siteReport = null;

	if (cookieStore.has(ACCESS_TOKEN_COOKIE_NAME)) {
		try {
			const response = await ApiInstance.get(`/check-upload/${siteId}`, {
				headers: {
					"auth-token": cookieStore.get(ACCESS_TOKEN_COOKIE_NAME)?.value,
				},
			});

			if (response.data) {
				hasReport = true;
				siteReport = response.data;
			}
		} catch (error) {
			// @ts-ignore
			if (error.response.status === 404) {
				hasReport = false;
				siteReport = null;
			} else {
				throw error;
			}
		}
	}

	if (!hasReport) {
		return (
			<section className="h-screen flex items-center justify-center flex-col">
				<span className="text-[2rem] font-semibold">No Report Available</span>
			</section>
		);
	}

	// console.log(siteReport);

	return <SiteProvider reportBeingViewed={siteReport}>{children}</SiteProvider>;
}
