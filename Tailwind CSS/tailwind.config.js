/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{html,js}",
  "./1.error/**/*.{html,js}", 
  "./2.Plant/**/*.{html,js}", 
  "./3.Breadcrumbs/**/*.{html,js}", 
  "./4.call-to-action-section/**/*.{html,js}", 
  "./5.card-grid/**/*.{html,js}", 
  './6.cards/**/*.{html,js}', 
],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [],
}

