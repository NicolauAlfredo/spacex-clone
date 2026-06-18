// Import Vite configuration helper
import { defineConfig } from "vite";

// Import React plugin for Vite
import react from "@vitejs/plugin-react";

// Export Vite configuration
export default defineConfig(({ command }) => ({
  // Enable React support in Vite
  plugins: [react()],

  // Use GitHub Pages base path only for production build
  base: command === "build" ? "/spacex-clone/" : "/",
}));
