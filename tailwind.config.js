/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bee': ['Be Vietnam Pro', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/img/Backgrounds/hero-pattern.svg')",
      },
      fontSize: {
        'sm-bee': ['48px', '19px'],
        'base-bee': ['16px', '24px'],
        'lg-bee': ['18px', '28px'],
        'xl-bee': ['20px', '30px'],
        '2xl-bee': ['48px', '36px'],
      },
      fontWeight: {
        'light': 200,
        'normal': 400,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
      },

      colors: {
        primary: {
          DEFAULT: '#DFE4EA', // Use the provided gray as the default
          'light': '#FFFFFF', // White
          'dark': '#637381',  // Dark gray
          'text': '#000000',  // Black for text on gray backgrounds
        },
        secondary: '#ff6347', // Replace red-500 with your custom color
      },

      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '41%',
      },
    },
  },
  plugins: [],
};
