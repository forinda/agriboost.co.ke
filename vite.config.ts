import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
    sourcemap: false,
  },
  css: {
    preprocessorOptions: {},
  },
  resolve: {
    alias: {
      // "@typings/*": ["src/typings/*"],
      // "@domain-pages/*": ["src/pages"],
      // "@admin-pages/*": ["src/pages/admin/*"],
      // "@base-pages/*": ["src/pages/base/*"],
      // "@shop-pages/*": ["src/pages/shop/*"],
      // "@social-pages/*": ["src/pages/social/*"],
      // "@base-auth/*": ["src/auth/*"],
      // "@api/*": ["src/api/*"],
      // "@provider-types/*": ["src/providers/types/*"],
      // "@message-provider": ["src/providers/messaging"],
      // "@message-provider/*": ["src/providers/messaging/*"],
      // "@state-provider": ["src/providers/state"],
      // "@state-provider/*": ["src/providers/state/*"],
      // "@shared-comps/*": ["src/shared/components/*"],
      // "@shared-hooks/*": ["src/shared/hooks/*"],
      // "@shared-hooks/*": ["src/shared/hooks/*"],
      // "@shared-data/*": ["src/shared/data/*"],
      // "@shared-constants/*": ["src/shared/constants/*"],
      // // "@domain-shared/*": ["src/shared/*"],
      // "@domain-error/*": ["src/error/*"],

      "@typings": path.resolve(__dirname, "src/typings"),
      "@domain-pages": path.resolve(__dirname, "src/pages"),
      "@admin-pages": path.resolve(__dirname, "src/pages/admin"),
      "@base-pages": path.resolve(__dirname, "src/pages/base"),
      "@shop-pages": path.resolve(__dirname, "src/pages/shop"),
      "@social-pages": path.resolve(__dirname, "src/pages/social"),
      "@base-auth": path.resolve(__dirname, "src/auth"),
      "@api": path.resolve(__dirname, "src/api"),
      "@provider-types": path.resolve(__dirname, "src/providers/types"),
      "@message-provider": path.resolve(__dirname, "src/providers/messaging"),
      "@state-provider": path.resolve(__dirname, "src/providers/state"),
      "@shared-comps": path.resolve(__dirname, "src/shared/components"),
      "@shared-hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@shared-data": path.resolve(__dirname, "src/shared/data"),
      "@shared-constants": path.resolve(__dirname, "src/shared/constants"),
      "@domain-error": path.resolve(__dirname, "src/error"),
      "@domain-shared": path.resolve(__dirname, "src/shared"),
      
    },
  },
});
