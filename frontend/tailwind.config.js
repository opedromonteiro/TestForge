/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'initial': '100px',
        'hover': '1000px',
      },
      colors: {
        'bggray': '#313131',
        'forange': '#F45722',
        'horange': '#F88E20',
        'loggray': '#B4B4B4',
      },
    },
  },
  plugins: [],
}

