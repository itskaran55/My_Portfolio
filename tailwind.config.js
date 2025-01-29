/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], 
  theme: {
    extend: {
      screens : {
        phs : {max : '540px'},
        lg: { min: '540px', max: '1200px' },
        sm : '612px',
      },
      colors: {
        customGray: "#252C2D",
        iconColor: "#181928"
      },
      boxShadow: {
        customInner: 'inset 2px 2px 5px black', 
        customOuter: '2px 2px 5px black',  
        contactBox : '2px 2px 5px rgba(0, 0, 0, 0.5), inset 2px 2px 15px rgba(122, 116, 116, 0.5)',   
      },
      transformOrigin: {
        center: "center",
      },
      perspective: {
        "1000": "1000px", // Add perspective
      },
      rotate: {
        180: "180deg", // Add 180-degree rotation
      },
    },
  },
  plugins: [],
  
};
