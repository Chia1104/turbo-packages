import type { Config } from "tailwindcss";
import baseConfig from "@acme/tailwind-config";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@acme/ui/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  plugins: [],
  presets: [baseConfig],
  darkMode: "class",
} satisfies Config;
