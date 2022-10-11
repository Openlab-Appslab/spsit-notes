/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['../src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        dark: '#8FA5B2',
        mid: '#C4D0C6',
        light: '#E3E9E9',
        superLight: '#EAE9E7',
        white: '#FFFFFF',
        black: '#000000',
      }
    },
  },
  plugins: [],
}
