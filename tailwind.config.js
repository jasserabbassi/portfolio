/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './components/**/*.{html,js}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        inter:['Fira Code','monospace']
      }
    },
  },
  plugins: [],
}

