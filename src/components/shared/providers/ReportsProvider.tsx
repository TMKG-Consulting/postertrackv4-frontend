"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";
import { CompetitiveUpload } from "@/types";

type ReportsTab = "competitive" | "compliance" | "all-competitive";

interface ReportStore {
	currentTab: ReportsTab;
	setCurrentTab(tab: ReportsTab): void;
	reportBeingViewed: CompetitiveUpload | null;
	setReportBeingViewed(val: CompetitiveUpload | null): void;
}

const ReportContext = createContext<StoreApi<ReportStore> | null>(null);

const createReportStore = (
	reportBeingViewed: CompetitiveUpload | null = null
) =>
	createStore<ReportStore>()((set) => ({
		currentTab: "competitive",
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
		reportBeingViewed: reportBeingViewed,
		setReportBeingViewed: (val) =>
			set((state) => ({ ...state, reportBeingViewed: val })),
	}));

const ReportsProvider = ({
	children,
	reportBeingViewed,
}: PropsWithChildren & { reportBeingViewed?: CompetitiveUpload | null }) => {
	const reportStoreRef = useRef<StoreApi<ReportStore> | null>(null);
	reportStoreRef.current = createReportStore(reportBeingViewed);

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
