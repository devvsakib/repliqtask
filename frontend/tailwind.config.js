/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      oswald: "Oswald, sans-serif",
      urbanist: "Urbanist, sans-serif",
    },
    extend: {
      colors: {
        primary: "#08A5EB",
        secondary: "#08A5EB",
        ter: "#f9a826"
      },
    },
  },
  plugins: [],
}
