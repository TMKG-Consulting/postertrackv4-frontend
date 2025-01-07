import LocationsProvider from "@/components/shared/providers/LocationsProvider";
import React from "react";
import { ApiInstance } from "@/utils";

export default async function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LocationsProvider>{children}</LocationsProvider>;
}
