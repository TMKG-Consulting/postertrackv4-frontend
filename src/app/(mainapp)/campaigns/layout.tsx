import SiteProvider from "@/components/shared/providers/SiteProvider";
import React from "react";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <SiteProvider>{children}</SiteProvider>;
}
