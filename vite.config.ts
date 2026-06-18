// Import Vite configuration helper
import { defineConfig } from "vite";

// Import React plugin for Vite
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig({
  // Enable React support in Vite
  plugins: [react()],

  // Base path required for GitHub Pages project deployment
  base: "/spacex-clone/",
});