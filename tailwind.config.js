/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "c-grey": "#dddddd",
        "c-brown": "#231B1B",
        "c-red": "#E5352C"
      }
    }
  },
  plugins: [],
}
