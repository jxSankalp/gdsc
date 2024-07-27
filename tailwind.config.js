/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Orbitron"],
      },
      backgroundImage: {
        "custom-radial":
          "radial-gradient(circle, rgba(186,11,161,1) 38%, rgba(0,212,255,1) 100%);",
      },
      screens: {
      'earth': '1020px',
    }
    },
  },
  plugins: [],
};
