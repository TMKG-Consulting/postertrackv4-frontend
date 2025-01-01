import LocationsProvider from "@/components/shared/providers/LocationsProvider";
import React from "react";

export default function layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <LocationsProvider>{children}</LocationsProvider>;
}
