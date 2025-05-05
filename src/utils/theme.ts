export const initializeTheme = () => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );

    // Check if the user has a stored theme preference
    const storedTheme = localStorage.getItem("theme-storage");
    if (storedTheme) {
      const { state } = JSON.parse(storedTheme);
      const isDark = state.theme === "dark";
      if (isDark) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    } else {
      // If no stored preference, check system preference
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        root.classList.add("dark");
      }
    }
  }
};
