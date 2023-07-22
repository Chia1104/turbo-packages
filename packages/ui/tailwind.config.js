const config = require("@chiastack/tailwind-config");
const { animation } = require("@chiastack/tailwind-config");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  presets: [animation, config],
};
