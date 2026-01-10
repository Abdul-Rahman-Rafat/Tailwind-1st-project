/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      keyframes: {
        planeMove: {
          '0%': { transform: 'skew(0deg)' },
          '50%': { transform: 'skew(15deg)' },
          '100%': { transform: 'skew(0deg)' },
        },
      },
      animation: {
        plane: 'planeMove 3s linear infinite',
      },
    },
  },
  plugins: [],
}
