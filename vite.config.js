import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  important: true, // Add this to prioritize Tailwind classes
  plugins: [tailwindcss(), react()],
});
