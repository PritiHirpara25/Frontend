/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  content: ["./404/**/*.{html,js}"], 
  content: ["./Plant/**/*.{html,js}"], 
  darkMode: 'selector',
  theme: {
    screens:{
        sm:'500px'
    },
    extend: {},
  },
  plugins: [],
}

