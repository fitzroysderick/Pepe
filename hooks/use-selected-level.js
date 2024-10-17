import { create } from "zustand";

export const useSelectedLevel = create((set) => ({
  selectedLevel: "",
  updateSelectedLevel: (selectedLevel) => set({ selectedLevel: selectedLevel }),
}));
