/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        droneOrange: "#FF5E00",
        droneBlue: "#181a30",
        logoBlue: "#191B41",
        logoOrange: "#E07A3E",
        fontBlack: "#121212",
      },
    },
  },
  plugins: [],
};
