/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue950: " hsl(213, 96%, 18%)",
        purple600: "hsl(243, 100%, 62%)",
        blue300: "hsl(228, 100%, 84%)",
        blue200: "hsl(206, 94%, 87%)",
        red500: "hsl(354, 84%, 57%)",
        Grey500: "hsl(231, 11%, 63%)",
        Purple200: "hsl(229, 24%, 87%)",
        Blue100: "hsl(218, 100%, 97%)",
        Blue50: "hsl(231, 100%, 99%)",
        // White: "hsl(0, 100%, 100%)",
      },
      fontFamily: {
        Ubuntu: '"Ubuntu", sans-serif',
      },
      // hoverInput:{
      //   border:'green600'
      // },
      width: {
        contactUsdevWidth: "900px",
      },
      height: {
        contactUsdevHeight: "568px",
      },
      
    },
  },
  plugins: [],
};
