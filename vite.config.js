import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Open the visualization in the browser
      filename: "bundle-size.html", // Output file name
    }),
  ],

  base: "/EcoVibe/",

  resolve: {
    alias: {
      src: "/src",
      mainPages: "/src/pages/Main Pages/",
      customerAuthPages: "/src/pages/Auth Pages/Customers/",
      sellerAuthPages: "/src/pages/Auth Pages/Sellers/",
      customerPages: "/src/pages/Customer Pages/",
      sellerPages: "/src/pages/Seller Pages/",
      UI: "/src/common/UI elements/",
      constants: "/src/common/utils/constants.js",
      hooks: "/src/common/hooks/",
    },
  },
});
