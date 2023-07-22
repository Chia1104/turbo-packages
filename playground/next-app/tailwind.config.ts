import type { Config } from "tailwindcss";
import baseConfig from "@acme/tailwind-config";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@acme/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  presets: [baseConfig],
  darkMode: "class",
} satisfies Config;
