/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
            'my-custom-blue': '#1a73e8',
            'brand-green': '#4CAF50',
            'white-c':"#FFFFFF"
          },
    },
  },
  plugins: [],
}