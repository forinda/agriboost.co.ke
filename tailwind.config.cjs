/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts,jsx,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        'system-ui': ['system-ui', 'sans-serif'],
        Asset: ['Asset', 'cursive', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'Rubik-Mono-One': ['Rubik Mono One', 'sans-serif']
      }
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
