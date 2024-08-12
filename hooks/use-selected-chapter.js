import { create } from "zustand";

export const useSelectedChapter = create((set) => ({
  selectedChapter: "",
  changeSelectedChapter: (id) => set({ selectedChapter: id }),
}));
