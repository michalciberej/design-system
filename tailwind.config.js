/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
}

