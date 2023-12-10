/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      color: {
        primary: {
          blue: "#2F80ED",
          oldgray: "#4F4F4F",
          gray: "#828282",
          lightgray: "#E0E0E0",
        },
        indicator: {
          lightorange: "#F8B76B",
          indigo: "#8785FF",
          crimson: "#EB5757",
          yellow: "#F2C94C",
        },
      },
    },
  },
  plugins: [],
};
