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
  './7.file-upload-form/**/*.{html,js}', 
  './8.Footer/**/*.{html,js}', 
  './9.Frequently/**/*.{html,js}', 
  './10.Hero-section/**/*.{html,js}', 
  './11.Landing-page/**/*.{html,js}', 
  './12.Product-feature/**/*.{html,js}', 
  './13.Product-watch/**/*.{html,js}', 
  './14.Product-clothes/**/*.{html,js}', 
  './15.Product-grid/**/*.{html,js}', 
  './16.Registration-form/**/*.{html,js}', 
  './17.User-avatars-grid/**/*.{html,js}', 
  './18.Image-query/**/*.{html,js}', 
],
corePlugins: {
  preflight: false
},
  darkMode: 'selector',
  theme: {
    extend: {},
  plugins: [],
}
}
