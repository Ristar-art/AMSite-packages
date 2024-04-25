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
  },
  plugins: [],
}
