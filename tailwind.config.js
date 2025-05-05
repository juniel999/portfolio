/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          50: "rgba(180, 190, 255, 0.1)",
          100: "rgba(170, 180, 255, 0.2)",
          200: "rgba(160, 170, 255, 0.3)",
          300: "rgba(150, 160, 255, 0.4)",
          400: "rgba(140, 150, 255, 0.5)",
          500: "rgba(130, 140, 255, 0.6)",
          600: "rgba(120, 130, 255, 0.7)",
          700: "rgba(110, 120, 255, 0.8)",
          800: "rgba(100, 110, 255, 0.9)",
          900: "rgba(90, 100, 255, 1)",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
