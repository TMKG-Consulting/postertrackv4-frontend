"use client";
import { createContext, useContext, useRef, PropsWithChildren } from "react";
import { createStore, StoreApi } from "zustand/vanilla";
import { useStore } from "zustand";
import { City, Region, State } from "@/types";

type LocationsTab = "regions" | "states" | "cities";

interface LocationsStore {
	currentTab: LocationsTab;
	states: State[];
	regions: Region[];
	cities: City[];
	statesToShowByRegion: number[];
	citiesToShowByState: number[];
	setCurrentTab(tab: LocationsTab): void;
	setStates: (states: State[]) => void;
	setRegions: (regions: Region[]) => void;
	setCities: (cities: City[]) => void;
	setStatesToShowByRegion: (val: number[]) => void;
	setCitiesToShowByState: (val: number[]) => void;
}

const LocationContext = createContext<StoreApi<LocationsStore> | null>(null);

const createLocationStore = (
	states: State[],
	regions: Region[],
	cities: City[],
	statesToShowByRegion: number[],
	citiesToShowByState: number[]
) =>
	createStore<LocationsStore>()((set) => ({
		currentTab: "regions",
		states: states,
		regions: regions,
		cities: cities,
		statesToShowByRegion,
		citiesToShowByState,
		setCurrentTab: (val) => set((state) => ({ ...state, currentTab: val })),
		setStates: (val) => set((state) => ({ ...state, states: val })),
		setRegions: (val) => set((state) => ({ ...state, regions: val })),
		setCities: (val) => set((state) => ({ ...state, cities: val })),
		setStatesToShowByRegion: (val) =>
			set((state) => ({ ...state, statesToShowByRegion: val })),
		setCitiesToShowByState: (val) =>
			set((state) => ({ ...state, citiesToShowByState: val })),
	}));

const LocationsProvider = ({
	children,
	states,
	regions,
	cities,
	statesToShowByRegion,
	citiesToShowByState,
}: PropsWithChildren & {
	states: State[];
	regions: Region[];
	cities: City[];
	statesToShowByRegion: number[];
	citiesToShowByState: number[];
}) => {
	const locationsStoreRef = useRef<StoreApi<LocationsStore> | null>(null);
	locationsStoreRef.current = createLocationStore(
		states,
		regions,
		cities,
		statesToShowByRegion,
		citiesToShowByState
	);

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
