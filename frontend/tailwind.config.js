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
      },
    },
  },
  plugins: [],
}

