import * as tvcolors from "tailwindcss/colors"


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: tvcolors.blue[50],
        "primary-light": tvcolors.blue[500],
        "primary-dark": tvcolors.blue[600],
        "secondary-light": tvcolors.blue[100],
        "secondary-dark": tvcolors.blue[900],
        "primary-text-light": tvcolors.blue[50],
        "primary-text-dark": tvcolors.blue[800],
        "secondary-text-light": tvcolors.gray[800],
        "secondary-text-dark": tvcolors.gray[100],
        "tertiary-text-light": tvcolors.gray[700],
        "tertiary-text-dark": tvcolors.gray[200],
        "input-disabled-light": tvcolors.gray[200],
        "input-disabled-dark": tvcolors.gray[300],
        "input-text-disabled-light": tvcolors.gray[400],
        "input-text-disabled-dark": tvcolors.gray[500],
        "border-light": tvcolors.gray[400],
        "border-dark": tvcolors.gray[600],
        "shadow-light": tvcolors.blue[200],
        "shadow-dark": tvcolors.blue[500],
        success: tvcolors.green[300],
        "success-emphasis": tvcolors.green[500],
        warning: tvcolors.orange[300],
        "warning-emphasis": tvcolors.orange[500],
        error: tvcolors.red[300],
        "error-emphasis": tvcolors.red[500],
      },
      borderRadius: {
        0: "4px",
        1: "8px",
        2: "12px",
        3: "16px"
      },
      boxShadow: {
        none: "none",
        "sm-light": `0.5px 1px 1px ${tvcolors.blue[300]}`,
        "sm-dark": `0.5px 1px 1px ${tvcolors.blue[800]}`, 
        "md-light":`0px 0px 2px ${tvcolors.blue[300]},
                    0px 0px 4px ${tvcolors.blue[300]},
                    0px 0px 6px ${tvcolors.blue[300]}`,
        "md-dark": `0px 0px 2px ${tvcolors.blue[800]},
                    0px 0px 4px ${tvcolors.blue[800]},
                    0px 0px 6px ${tvcolors.blue[800]}`,
        "lg-light": `0px 0px 2px ${tvcolors.blue[300]},
                    0px 0px 4px ${tvcolors.blue[300]},
                    0px 0px 8px ${tvcolors.blue[300]},
                    0px 0px 16px ${tvcolors.blue[300]},
                    0px 0px 32px ${tvcolors.blue[300]}`,
        "lg-dark": `0px 0px 2px ${tvcolors.blue[800]},
                    0px 0px 4px ${tvcolors.blue[800]},
                    0px 0px 8px ${tvcolors.blue[800]},
                    0px 0px 16px ${tvcolors.blue[800]},
                    0px 0px 32px ${tvcolors.blue[800]}`
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

