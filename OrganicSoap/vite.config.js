import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react({
      // Forces the React plugin to track and hot-reload components nested inside your AppRoutes
      include: "**/*.{jsx,tsx}",
    }),
    tailwindcss(),
  ],
  server: {
    watch: {
      // Forces Windows to actively scan your files for changes every 100ms
      usePolling: true,
      interval: 100,
    },
    hmr: {
      // Displays compilation or syntax errors as an overlay in your browser
      overlay: true,
    },
  },
});
