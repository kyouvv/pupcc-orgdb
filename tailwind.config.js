/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      'Lobster' : ["Lobster", "sans-serif"]
    },
    extend: {
    },
  },
  daisyui: {
    themes: ['emerald'],
  },
  plugins: [require("daisyui")],
}
