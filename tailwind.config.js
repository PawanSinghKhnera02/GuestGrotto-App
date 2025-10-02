/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // tumhari saari EJS files scan hongi
    "./public/**/*.html", // optional agar public me html hai
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
