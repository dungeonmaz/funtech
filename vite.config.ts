import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "@pages": "/src/pages",
      "@modules": "/src/modules",
      "@components": "/src/components",
      "@styles": "/src/styles",
      "@utils": "/src/utils",
      "@hooks": "/src/hooks",
      "@images": "/src/assets/images",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@styles/colors.scss";',
        silenceDeprecations: ["import"],
      },
    },
  },
});
