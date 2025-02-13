"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";
import { SiteAssignmentReport } from "@/types";

type SiteDetailsTab = "details" | "report";

interface SiteStore {
	currentTab: SiteDetailsTab;
	setCurrentTab(tab: SiteDetailsTab): void;
	reportBeingViewed: SiteAssignmentReport | null;
	setReportBeingViewed(val: SiteAssignmentReport | null): void;
}

const SiteContext = createContext<StoreApi<SiteStore> | null>(null);

const createSiteStore = (
	reportBeingViewed: SiteAssignmentReport | null = null
) =>
	createStore<SiteStore>()((set) => ({
		currentTab: "report",
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
		reportBeingViewed: reportBeingViewed,
		setReportBeingViewed: (val) =>
			set((state) => ({ ...state, reportBeingViewed: val })),
	}));

const SiteProvider = ({
	children,
	reportBeingViewed,
}: PropsWithChildren & { reportBeingViewed?: SiteAssignmentReport | null }) => {
	const siteStoreRef = useRef<StoreApi<SiteStore> | null>(null);
	siteStoreRef.current = createSiteStore(reportBeingViewed);

	return (
		<SiteContext.Provider value={siteStoreRef.current}>
			{children}
		</SiteContext.Provider>
	);
};

export const useSiteStore = () => {
	const ctxStore = useContext(SiteContext);

	return useStore(ctxStore!, (state) => state);
};

export default SiteProvider;
