import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [dts(), solid()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: "index",
    },
    sourcemap: true,
    rollupOptions: {
      external: ["solid-js"],
    },
  },
  test: {
    environment: "happy-dom",
    setupFiles: ["./vitest-setup.ts"],
    outputFile: {
      junit: "./junit-report.xml",
    },
    reporters: ["junit"],
  },
});
