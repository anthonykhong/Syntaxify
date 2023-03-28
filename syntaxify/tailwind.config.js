const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{ejs,jsx}",
    "./views/partials/**/*.{ejs,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
