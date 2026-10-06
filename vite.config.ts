import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: "/doctor_blythe_web_app/",
	plugins: [react(), tailwindcss()],
	server: {
		host: true, // Expose on local network (0.0.0.0)
		port: 5173,
	},
});
