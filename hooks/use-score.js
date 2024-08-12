import { create } from "zustand";

export const useScore = create((set) => ({
  score: 0,
  updateScore: (correctAnswer) => set({ score: correctAnswer }),
}));
