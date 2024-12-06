"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";

interface Alert {
	show: boolean;
	message: string;
	type: "error" | "success";
}

interface RootStore {
	alert: Alert;
	setAlert(alert: Alert): void;
}

const RootContext = createContext<StoreApi<RootStore> | null>(null);

const createRootStore = () =>
	createStore<RootStore>()((set) => ({
		alert: {
			show: false,
			message: "A initial message",
			type: "success",
		},
		setAlert: (val) => set((state) => ({ ...state, alert: val })),
	}));

const RootProvider = ({ children }: PropsWithChildren) => {
	const rootStoreRef = useRef<StoreApi<RootStore> | null>(null);
	rootStoreRef.current = createRootStore();

	return (
		<RootContext.Provider value={rootStoreRef.current}>
			{children}
		</RootContext.Provider>
	);
};

export const useRootStore = () => {
	const ctxStore = useContext(RootContext);

	return useStore(ctxStore!, (state) => state);
};

export default RootProvider;
