/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00d7f1",
        
"secondary": "#0074ff",
        
"accent": "#105d00",
        
"neutral": "#17080f",
        
"base-100": "#fff8de",
        
"info": "#00d3ff",
        
"success": "#00c793",
        
"warning": "#c98f00",
        
"error": "#ff4676",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}