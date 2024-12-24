/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     },
  },
  plugins: [],
}
  // /** @type {import('tailwindcss').Config} */
  // export default {
  //   content: [
  //     "./index.html",
  //     "./src/**/*.{js,ts,jsx,tsx}",
  //   ],
  //   theme: {
  //     extend: {
  //       animation:{
  //         slide:'anime 1s linear'
  //       },
  //       keyframes:{
  //         anime:{
  //           '0%':{transform:'translateX(500px)'},
  //         },
  //       },
  //     },
  //   },
  //   plugins: [],
  // }