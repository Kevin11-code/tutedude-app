/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        shad: "0px 3px 100px rgba(0, 0, 0, 0.1)",
        shad2: "0px 2px 8px rgba(128, 0, 128, 0.15)",
      },
      backgroundImage: {
        grad: "linear-gradient(270deg, #800080 0%, #FF864C 100%)",
      },
      colors: {
        new: "#800080",
        nice: "#EEAEAE",
      },
      fontFamily: {
        poppins: "Poppins, sans-serif",
      },
      spacing: {
        cardw: "358px",
      },
      screens: {
        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
