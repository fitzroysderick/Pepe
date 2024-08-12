import { create } from "zustand";

export const useSelectedLevel = create((set) => ({
  selectedLevel: "",
  updateSelectedLevel: (newLevel) => set({ selectedLevel: newLevel }),
}));
