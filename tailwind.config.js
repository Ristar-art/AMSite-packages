/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
 theme: {
    extend: {
      colors: {
        customBlue: '#072840',
        customOrange: '#FE951C',
        customYellow: '#FFFB03',
        customWhite: '#FFFFFF',
        customBackground: '#1D4355',
      },
   },
   screens: {
      'sm': '640px',
     // => @media (min-width: 640px) { ... }
     
      'md':'768px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}
