import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    alias: {
      "@api": "/src/api",
      "@atoms": "/src/atoms",
      "@components": "/src/components",
      "@hooks": "/src/hooks",
      "@interfaces": "/src/interfaces",
      "@pages": "/src/pages",
      "@utils": "/src/utils",
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port:
      process.env.NODE_ENV === "development"
        ? parseInt(process.env.VITE_PORT) || 3010
        : 3000,
  },
  preview: {
    port:
      process.env.NODE_ENV === "development"
        ? parseInt(process.env.VITE_PORT) || 3010
        : 3000,
  },
});
