/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        myBlack: "#222230",
        myGray: "#39394d",
        myRed: "#b22424",
        myBackground: "#F5F5F5",
      },
    },
  },
  plugins: [],
};
