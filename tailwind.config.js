/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'accent-primary': '#4A6DE5',
      'accent-disable': '#E2F6FF',
      'alternate-primary': '#23B8FC',
      'text-primary': '#1F1F1F',
      'text-secondary': '#637381',
      'text-tertiary': '#9C9C9C',
      'error-primary': '#FC5723',
      'zero': '#FFFFFF',
      'stroke': '#DFE4EA',
      'hover': '#F4F4F4',
    },
    extend: {
      fontFamily: {
        'bee': ['Lexend', 'sans-serif'],
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
