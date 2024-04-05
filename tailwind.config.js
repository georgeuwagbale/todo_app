/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'], // add 'active' variant for backgroundColor
    },
  },
  plugins: [],
}

