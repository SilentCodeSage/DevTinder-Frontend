/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: [
    "./index.html", // Make sure the HTML file is being scanned
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS/JSX/TS/TSX files in the src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light", // Use the default light theme
      "dark", // Use the dark theme
      "bumblebee", // Custom theme provided by DaisyUI
    ],
  },
};
