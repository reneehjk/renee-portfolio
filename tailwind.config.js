/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
      screens: {
        'sm': '320px',
        'md': '640px',
        'lg': '1230px',
      },
      extend: {
        colors: {
          darkBrown: "#857258",
          brown: "#B29671",
          lightBeige: "#F4F0DB",
          beige: "#ECD9BA",
          mediumBeige: "#DEC19B",
          white: "#FFFAF1",
          darkBeige: "#D6B68D",
        },
        fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };