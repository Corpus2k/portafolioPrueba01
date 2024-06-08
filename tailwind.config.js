/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './**/*.{html,js}'],
  
  theme: {
    screens:{
      'large': {'max': '1600px'},
      'middle': {'max': '1200px'},
      'small': {'max': '1040px'},
      'tablet': {'max': '768px'},
      'phone': {'max': '480px'},
    },
    fontFamily: {
      poppins: ['Poppins', "sans-serif"],
      opensans: ['Open Sans', "sans-serif"],
    },
    extend: {
      colors: {
        "main-color": "var(--main-color)",
        "extra-color": "var(--extra-color)",
      },
    },
  },
  plugins: [],
}
