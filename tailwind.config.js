/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      "steel-blue": {
        50: "#e0e7ef",
        100: "#c1d0e8",
        200: "#9ab4d1",
        300: "#6b8abd",
        400: "#3b5fbf",
        500: "#1a4a9d",
        600: "#153b7d",
        700: "#102d5e",
        800: "#0e2348",
        900: "#0b1a33",
      },
      "charcoal-gray": {
        50: "#f5f5f5",
        100: "#e0e0e0",
        200: "#b8b8b8",
        300: "#8f8f8f",
        400: "#6e6e6e",
        500: "#4a4a4a",
        600: "#3a3a3a",
        700: "#2c2c2c",
        800: "#1e1e1e",
        900: "#121212",
      },
      emerald: {
        50: "#ecfdf5",
        100: "#d1fadf",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
        xl: "0 20px 25px rgba(0, 0, 0, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss")],
};
