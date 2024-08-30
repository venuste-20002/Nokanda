/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors:{
        primary: '#000000',
        secondary: '#FFA800',
        principalYellow: "#FFA800",
        principalBlack: "#000000",
        principalGray: "#D9D9D9",
      }
    },
  },
  plugins: [],
};
