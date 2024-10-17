import { create } from "zustand";

export const useSelectedChapter = create((set) => ({
  selectedChapter: "",
  updateSelectedChapter: (selectedChapter) =>
    set({ selectedChapter: selectedChapter }),
}));
