import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ← これが超重要
    setupFiles: "./src/setupTests.js",
    globals: true, // expectをグローバルで使えるように
  },
});
