import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { FinderItem } from "@/types/window-types";

import { locations } from "@/constants/locations";


interface LocationStore {
    activeLocation: FinderItem;
    setActiveLocation: (location: FinderItem) => void;
    resetActiveLocation: () => void;
}

const DEFAULT_LOCATION: FinderItem = locations.work as FinderItem;

const useLocationStore = create<LocationStore>()(
    immer((set) => ({
        activeLocation: DEFAULT_LOCATION,

        setActiveLocation: (location) => set((state) => {
            if (location === undefined) return;
            state.activeLocation = location;
        }),

        resetActiveLocation: () =>
            set((state) => {
                state.activeLocation = DEFAULT_LOCATION;
            }),
    }))
);

export default useLocationStore;