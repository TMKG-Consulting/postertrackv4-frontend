"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";

type LocationsTab = "regions" | "states" | "cities";

interface LocationsStore {
	currentTab: LocationsTab;
	setCurrentTab(tab: LocationsTab): void;
}

const LocationContext = createContext<StoreApi<LocationsStore> | null>(null);

const createLocationStore = () =>
	createStore<LocationsStore>()((set) => ({
		currentTab: "regions",
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
	}));

const LocationsProvider = ({ children }: PropsWithChildren) => {
	const locationsStoreRef = useRef<StoreApi<LocationsStore> | null>(null);
	locationsStoreRef.current = createLocationStore();

	return (
		<LocationContext.Provider value={locationsStoreRef.current}>
			{children}
		</LocationContext.Provider>
	);
};

export const useLocationsStore = () => {
	const ctxStore = useContext(LocationContext);

	return useStore(ctxStore!, (state) => state);
};

export default LocationsProvider;
