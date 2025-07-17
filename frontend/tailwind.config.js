/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'login': '800px',
        'hover': '1000px',
        'bar': '60px',
      },
      colors: {
        'bggray': '#313131',
        'forange': '#F45722',
        'horange': '#F88E20',
        'loggray': '#828080',
      },
    },
  },
  plugins: [],
}

