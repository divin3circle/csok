/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        title: "#2b6462",
        body: "##17252a",
        brush: "##def2f1",
        background: "#ffffff",
        primary: "##1f1e1c",
      },
    },
  },
  plugins: [],
};
