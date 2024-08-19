/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        principalYellow: "#FFA800",
        principalBlack: "#000000",
        principalGray: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
