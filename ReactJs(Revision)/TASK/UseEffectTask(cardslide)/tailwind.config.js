/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        slidenext : 'slidenext 1s ease-in-out',
        slideprev : 'slideprev 1s ease-in-out'
      },
      keyframes : {
        slidenext : {
          '0%': {transform:'translate(500px)'}
        },
        slideprev : {
          '0%' : {transform:'translate(-500px)'}
        }
      }
    },
  },
  plugins: [],
}