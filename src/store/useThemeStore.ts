import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";

interface ThemeStore {
  theme: "light" | "dark";
  toggleTheme: (
    announce?: (message: string, assertive?: boolean) => void
  ) => void;
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: (announce) =>
        set((state) => {
          const newTheme = state.theme === "light" ? "dark" : "light";
          const message = `Switched to ${newTheme} mode`;

          toast.success(message, {
            icon: newTheme === "dark" ? "🌙" : "☀️",
            duration: 2000,
          });

          // Announce theme change to screen readers
          if (announce) {
            announce(message, true);
          }

          return { theme: newTheme };
        }),
    }),
    {
      name: "theme-storage",
    }
  )
);
