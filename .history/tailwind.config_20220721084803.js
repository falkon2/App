/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
          'background': "linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(./img/bg.jpg)",
      },
      width: {
        '1/10': '10%',
      },
      animation: {
        'typing-title': '0.5s ease-in-out infinite alternate',
      },
      borderWidth: {
        '3': '3px',
      },
      transition: {
        'transform-transition': '0.3s ease',
      },
      },
  },
  plugins: [],
  mode: 'jit',
}
