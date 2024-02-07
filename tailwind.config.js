/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#eeeff7",
          100: "#dddeee",
          200: "#babdde",
          300: "#989ccd",
          400: "#757bbd",
          500: "#535aac",
          600: "#42488a",
          700: "#323667",
          800: "#212445",
          900: "#111222",
          950: "#080911",
        },
        background: {
          50: "#edf0f8",
          100: "#dbe2f0",
          200: "#b6c5e2",
          300: "#92a8d3",
          400: "#6d8ac5",
          500: "#496db6",
          600: "#3a5792",
          700: "#2c426d",
          800: "#1d2c49",
          900: "#0f1624",
          950: "#070b12",
        },
        primary: {
          50: "#e8eafd",
          100: "#d0d6fb",
          200: "#a2adf6",
          300: "#7384f2",
          400: "#445bee",
          500: "#1632e9",
          600: "#1128bb",
          700: "#0d1e8c",
          800: "#09145d",
          900: "#040a2f",
          950: "#020517",
        },
        secondary: {
          50: "#eaecfb",
          100: "#d5daf6",
          200: "#aab4ee",
          300: "#808fe5",
          400: "#566adc",
          500: "#2b45d4",
          600: "#2337a9",
          700: "#1a297f",
          800: "#111b55",
          900: "#090e2a",
          950: "#040715",
        },
        accent: {
          50: "#e9ebfc",
          100: "#d2d7f9",
          200: "#a5b0f3",
          300: "#7888ed",
          400: "#4b60e7",
          500: "#1f38e0",
          600: "#182db4",
          700: "#122287",
          800: "#0c175a",
          900: "#060b2d",
          950: "#030616",
        },
      },
    },
  },
};
