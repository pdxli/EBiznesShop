/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0d8065",
        secondary: "#f0f2fc",
        accent: "#aff2ea",
        background: "#ffffff",
        text: "#0e101a",
      },
      boxShadow: {
        "3xl": " 0px 3px 25px 2px rgba(13, 128, 101, 1)",
        "4xl": " 0px 10px 100px -21px rgba(13, 128, 101, 1);",
      },
    },
    plugins: [],
  },
};
