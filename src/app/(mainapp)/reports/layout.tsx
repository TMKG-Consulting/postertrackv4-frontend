import ReportsProvider from "@/components/shared/providers/ReportsProvider";
import React, { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
	return <ReportsProvider>{children}</ReportsProvider>;
}
