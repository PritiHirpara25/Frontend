/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./1.404error/**/*.{html,js}"], 
  content: ["./2.Plant/**/*.{html,js}"], 
  content: ["./3.Breadcrumbs/**/*.{html,js}"], 
  content: ["./4.call-to-actio-section/**/*.{html,js}"], 
  content: ["./5.card-grid/**/*.{html,js}"], 
  darkMode: 'selector',
  theme: {
    screens:{
        sm:'500px'
    },
    extend: {},
  },
  plugins: [],
}

