/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundColor:{
        "bgOne": "#ffffff",
        "bgTwo": "#f2f2f2",
        "bgThree": "#d5d5d5",
        "bgFour": "#999999",
        "bgFive": "#a18a4d",
        "bgSix":"#333333e6",
        "bgSeven": "#333333"

      },

      colors: {
        "colorOne": "#ffffff",
        "colorTwo": "#f2f2f2",
        "colorThree": "#d5d5d5",
        "colorFour": "#a18a4d",
        "colorFive":"#6c757d",
        "colorSix": "#404143",
        "colorSeven": "#333333",
        "colorEight": "#212529",
        "colorNine": "#000000"
      },

      fontFamily:{
        "first": "sans-serif",
        "second": ["Lato", "sans-serif"],
        "third": "Font Awesome 6 Free",
        "fourth": "Font Awesome 6 Brands",
        
      }
    },
  },
  plugins: [],
}

