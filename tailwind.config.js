/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        visby: [
          'Visby Regular',
        ],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/img/Backgrounds/hero-pattern.svg')",
      },
      fontSize: {
        'sm-visby': ['12px', '19px'], // font-size and line-height
        'base-visby': ['16px', '24px'],
        'lg-visby': ['18px', '28px'],
        'xl-visby': ['20px', '30px'],
        '2xl-visby': ['48px', '36px'],
      },
      fontWeight: {
        'normal-visby': '800',
        'semibold-visby': '600',
        'bold-visby': '700',
      },
    
      
    },

  },
}