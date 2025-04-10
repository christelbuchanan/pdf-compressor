/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        leather: {
          50: '#f9f7f5',
          100: '#f1ece5',
          200: '#e2d8cc',
          300: '#d2bfad',
          400: '#c0a68e',
          500: '#b08e73',
          600: '#9a7a62',
          700: '#806553',
          800: '#6a5446',
          900: '#57463c',
        },
        paper: {
          50: '#fefefe',
          100: '#f9f7f3',
          200: '#f5f0e8',
        }
      },
      backgroundImage: {
        'paper-texture': "url('https://www.transparenttextures.com/patterns/paper.png')",
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
    },
  },
  plugins: [],
}
