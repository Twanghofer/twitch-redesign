module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#9650FE",
        link: "#772ce8",
      },
    },
  },
  plugins: [require("tailwindcss-no-scrollbar")],
};
