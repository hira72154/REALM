
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "three-vendor",
              test: /node_modules[\\/](three|@react-three)[\\/]/,
              minSize: 100000,
              maxSize: 250000,
              priority: 20,
            },
            {
              name: "vendor",
              test: /node_modules/,
              minSize: 100000,
              maxSize: 250000,
              priority: 10,
            },
          ],
        },
      },
    },
  },
});
