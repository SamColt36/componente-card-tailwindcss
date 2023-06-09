/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "dark",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        // => @media and (min-width: 1024px) and (max-width: 1279px) { ... }

        lg: { min: "768px", max: "1023px" },
        // => @media and (min-width: 768px) and (max-width: 1023px) { ... }

        md: { min: "426px", max: "767px" },
        // => @media and (min-width: 426px) and (max-width: 767px) { ... }

        sm: { min: "320px", max: "425px" },
        // => @media and (min-width: 320px) and (max-width: 425px) { ... }
      },
      colors: {
        background: "#23263A",
        laranja: "#FF6234",
      },
      plugins: [],
    },
  },
};
