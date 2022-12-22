/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      },
      fontFamily:{
        'junkdog': ['JunkDog'],
        'gilroy' : ['Gilroy'],
        'bebas-neue' : ['Bebas Neue']
      },
      textShadow: {
        '2xl': '0px 4px 1px #FF5E19',
        '3xl': '-1px -1px 1px rgba(0, 0, 0, 1), 0px 8px 1px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-textshadow')
  ],
}