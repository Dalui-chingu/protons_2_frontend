/* eslint-disable no-unused-vars */
import { create } from "zustand";

export const useStationStore = create((set) => ({
  resultLocation: [],
  setresultLocation: (location) => {
    return set((state) => ({
        resultLocation: location,
    }));
  },

  stations: [],
  setStations: (st) => {
    return set((state) => ({
      stations: st,
    }));
  },
}));
