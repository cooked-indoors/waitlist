/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1440px",
        },
      },
      fontFamily: {
        raleway: ["Raleway"],
      },
      colors: {
        primaryColor: "#1D319A",
        orangeF3: "#F3924F",
        black10: "#101828",
      },
    },
  },
  plugins: [],
};
