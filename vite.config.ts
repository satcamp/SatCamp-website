import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  // Base public path. Defaults to "/" (correct for the custom domain root).
  // The GitHub Pages workflow sets VITE_BASE=/SatCamp-website/ so the project
  // page at satcamp.github.io/SatCamp-website/ resolves assets correctly.
  base: process.env.VITE_BASE || "/",
  server: {
    port: 9000,
  },
  plugins: [react(), svgr()],
});
