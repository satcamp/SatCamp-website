/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sulphur Point", "sans-serif"],
      },
      backgroundColor: {
        primary: "#fff",
        secondary: "#333",
      },
      backgroundImage: {
        'sat': "url('/src/assets/images/sat.jpg')",
        'gps': "url('assets/images/gps.jpg')",
        'hands': "url('assets/images/hands.jpg')",
        'sat2': "url('assets/images/sat2.jpg')",
        'forest': "url('assets/images/forest.jpg')",
        // '': "url('assets/images/.jpg')",
      },
      colors: {
        "primary-fg": "#1e293b",
      },
      borderWidth: {
        "1": "1px",
      },
    },
  },
  plugins: [],
};
