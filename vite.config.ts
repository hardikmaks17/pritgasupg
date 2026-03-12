import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    Sitemap({
      hostname: "https://pritgasupg.in",
      dynamicRoutes: [
        "/",
        "/our-pgs",
        "/gallery",
        "/about",
        "/contact",
        "/pg/jodhpur-kunj-11",
        "/pg/jodhpur-kunj-23",
        "/pg/jodhpur-kunj-29",
        "/pg/arun-prakash-a1",
        "/pg/arun-prakash-b33",
        "/pg/arun-prakash-b34",
        "/pg/sarthi-avenue-c43",
        "/pg/vasupujya-row-house-10"
      ],
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
