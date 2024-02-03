/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,ts}'],
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bgPrimary: '#CCCCCC',
          bgSecondary: '#F5F5F5',
          bgcards: '#F5F5F5',
        },
        light: {
          bgPrimary: '#010A0F',
          bgSecondary: '#2D333C',
          bgcards: '#171A1E',
        }
      },
    },
  },
  plugins: [],
}

