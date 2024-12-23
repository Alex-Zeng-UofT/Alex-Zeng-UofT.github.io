/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        big: '1670px',
        mac: '1340px',
        edu: '1170px',
        pro: '390px',
        samsung: '430px',
        phone: '410px',
        xxl: '1920px',
        hero: '1064px'
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "about-pattern": "url('/src/assets/aboutbg.jpg')",
        "badge-pattern": "url('/src/assets/badge.png')",
      },
    },
  },
  plugins: [],
};