import { create } from "zustand";
import { ThemeState } from "../types/types";

export const useStore = create<ThemeState>((set) => ({
  theme: "light",
  setTheme: (value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", value);
    }
    set({ theme: value });
  },
}));
