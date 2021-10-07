/* eslint-disable global-require */

module.exports = {
  purge: {
    enabled: true,
    content: ["./src/**/*.html", "./src/**/*.scss"],
  },
  mode: "jit",
  darkMode: "class",
  important: true,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
