"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";

type ReportsTab = "competitive" | "compliance";

interface ReportStore {
	currentTab: ReportsTab;
	setCurrentTab(tab: ReportsTab): void;
}

const ReportContext = createContext<StoreApi<ReportStore> | null>(null);

const createReportStore = () =>
	createStore<ReportStore>()((set) => ({
		currentTab: "competitive",
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
	}));

const ReportsProvider = ({ children }: PropsWithChildren) => {
	const reportStoreRef = useRef<StoreApi<ReportStore> | null>(null);
	reportStoreRef.current = createReportStore();

	return (
		<ReportContext.Provider value={reportStoreRef.current}>
			{children}
		</ReportContext.Provider>
	);
};

export const useReportStore = () => {
	const ctxStore = useContext(ReportContext);

	return useStore(ctxStore!, (state) => state);
};

export default ReportsProvider;
