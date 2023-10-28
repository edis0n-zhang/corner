/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1200px',
    },
  },
  plugins: [],
}