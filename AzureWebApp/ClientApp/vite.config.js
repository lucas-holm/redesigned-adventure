import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        proxy: {
            "/weatherforecast": {
                target: "https://localhost:7018",
                secure: false,
            },
        },
    },
    build: {
        outDir: "wwwroot/dist",
    },
});
