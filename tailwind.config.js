/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
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
