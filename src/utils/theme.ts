export const initializeTheme = () => {
  if (typeof window !== "undefined") {
    const root = window.document.documentElement;

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
      // No stored preference, default to dark theme
      root.classList.add("dark");
    }
  }
};
