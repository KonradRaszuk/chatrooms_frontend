import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vercel from "vite-plugin-vercel";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercel()],
  server: {
    host: "0.0.0.0",
    port: process.env.PORT as unknown as number,
  },
});
