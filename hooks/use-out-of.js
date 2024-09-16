import { create } from "zustand";

export const useOutOf = create((set) => ({
  outOf: 0, // Initial value for outOf
  updateOutOf: (newOutOf) => set({ outOf: newOutOf }),
}));
