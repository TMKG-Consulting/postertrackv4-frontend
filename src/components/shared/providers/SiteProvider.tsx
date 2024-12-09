"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";

type SiteDetailsTab = "details" | "report";

interface SiteStore {
	currentTab: SiteDetailsTab;
	setCurrentTab(tab: SiteDetailsTab): void;
}

const SiteContext = createContext<StoreApi<SiteStore> | null>(null);

const createSiteStore = () =>
	createStore<SiteStore>()((set) => ({
		currentTab: "report",
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
	}));

const SiteProvider = ({ children }: PropsWithChildren) => {
	const siteStoreRef = useRef<StoreApi<SiteStore> | null>(null);
	siteStoreRef.current = createSiteStore();

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
