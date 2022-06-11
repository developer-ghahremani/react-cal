/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0080E2",
        secondary: "#191919",
        gray: { dark: "#B9B9B9", light: "#F3F3F3" },
      },
    },
  },
  plugins: [],
};
