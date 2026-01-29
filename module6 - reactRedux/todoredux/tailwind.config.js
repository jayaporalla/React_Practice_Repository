/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// here I have install npm install -D tailwindcss@3.4 postcss autoprefixer this version
// step1:- npm install -D tailwindcss@3.4 postcss autoprefixer
// step2:- npx tailwindcss init
// step3:- "./src/**/*.{js,jsx,ts,tsx}" (paste inside content in tailwind.config.js file)
// step4:- @tailwind base;
// @tailwind components;
// @tailwind utilities; add this in App.css and index.css files