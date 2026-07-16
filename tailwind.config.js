/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  safelist: [
    { pattern: /^(bg|text|border)-(gray|black)-?(50|100|200|300|400|500|600|700|800|900)?$/ },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
