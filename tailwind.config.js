/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      '9/10': '90%',
      '8/10': '80%',
      '6/10': '60%',
    },
    screens: {
      md: '600px',
      'max-md': { 'max': '599.98px' },
      lg: '1024px',
      xl: '1200px',
      '2xl': '1600px',
    },
    extend: {},
  },
  plugins: [],
};
