"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";
import { Industry } from "@/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AccountManager } from "@/types";

export interface Alert {
	show?: boolean;
	message: string;
	type: "error" | "success";
}

interface RootStore {
	alert: Alert;
	setAlert(alert: Alert): void;
	industries: Industry[];
	setIndustries: (val: Industry[]) => void;
	userDetails: AccountManager | null;
	setUserDetails: (val: AccountManager | null) => void;
}

const RootContext = createContext<StoreApi<RootStore> | null>(null);
const queryClient = new QueryClient();

const createRootStore = (
	industries?: Industry[],
	userDetails?: AccountManager
) =>
	createStore<RootStore>()((set) => ({
		alert: {
			show: false,
			message: "A initial message",
			type: "success",
		},
		industries: industries ?? [],
		userDetails: userDetails ?? null,
		setAlert: (val) => set((state) => ({ ...state, alert: val })),
		setIndustries: (val) =>
			set((state) => ({
				...state,
				industries: val,
			})),
		setUserDetails: (val) =>
			set((state) => ({
				...state,
				userDetails: val,
			})),
	}));

const RootProvider = ({
	children,
	industries,
	userDetails,
}: PropsWithChildren & {
	industries?: Industry[];
	userDetails?: AccountManager;
}) => {
	const rootStoreRef = useRef<StoreApi<RootStore> | null>(null);
	rootStoreRef.current = createRootStore(industries, userDetails);

	return (
		<QueryClientProvider client={queryClient}>
			<RootContext.Provider value={rootStoreRef.current}>
				{children}
			</RootContext.Provider>
		</QueryClientProvider>
	);
};

export const useRootStore = () => {
	const ctxStore = useContext(RootContext);

	return useStore(ctxStore!, (state) => state);
};

export default RootProvider;
