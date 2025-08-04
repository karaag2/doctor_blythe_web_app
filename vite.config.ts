import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/doctor_blythe_web_app/",
	plugins: [react(), tailwindcss()],
});
