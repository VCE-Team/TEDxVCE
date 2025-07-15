import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      exclude: [],
      cache: false,
      include: ["./src/**/*.ts", "./src/**/*.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
