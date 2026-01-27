import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client/src") // ✅ point to your src folder
    }
  },

  base: "/",          // ✅ REQUIRED
  build: {
    outDir: "dist",   // ✅ REQUIRED
    emptyOutDir: true
  }
});
