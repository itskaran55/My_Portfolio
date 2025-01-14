/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Include all file types
  theme: {
    extend: {
      screens : {
        phs : {max : '440px'},
        sm : '612px',
      },
      colors: {
        customGray: "#252C2D",
        iconColor: "#181928"
      },
      boxShadow: {
        customInner: 'inset 2px 2px 5px black', 
        customOuter: '2px 2px 5px black',      
      }
    },
  },
  plugins: [],
};
