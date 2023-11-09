/** @type {import('tailwindcss').Config} */

var settings = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-50': '#eef2ff',
        'primary-100': '#e0f7ff',
        'primary-200': '#d0d7f7',
        'primary-300': '#aab9ff',
        'primary-400': '#8994ff',
        'primary-500': '#6b70fc',
        'primary-600': '#554fee',
        'primary-700': '#453ccd',
        'primary-800': '#3830a2',
        'primary-900': '#272173',
      },
    },
  },
  plugins: [],
};

export default settings;
