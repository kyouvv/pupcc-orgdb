/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        VT323 : ["VT323"]
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00d7f1",
        
"secondary": "#0074ff",
        
"accent": "#5E59C9",
        
"neutral": "#17080f",
        
"base-100": "#1f1b47",
        
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