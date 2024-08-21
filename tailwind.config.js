import * as tvcolors from "tailwindcss/colors"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryL: tvcolors.teal[400],
        secondaryL: tvcolors.teal[100],
        primaryD: tvcolors.teal[600],
        secondaryD: tvcolors.teal[800]
      },
      borderRadius: {
        0: "4px",
        1: "8px",
        2: "12px",
        3: "16px"
      },
      fontFamily: {
        main: 
    "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      }
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: [],
}

