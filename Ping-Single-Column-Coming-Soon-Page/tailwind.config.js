/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {    // Varsayılanları değiştirmek için kullanılır.

    fontFamily: {
      sans: ["Libre Franklin", "sans-serif"],
    },
    extend: { // Yeni bir class eklemek için kullanılır.
      
      colors: {
        "pale-blue": "hsl(223, 100%, 88%)",
        "light-red": "hsl(354, 100%, 66%)",
        "very-dark-blue": "hsl(209, 33%, 12%)",
        'custom-blue': "hsl(223, 87%, 63%)",
        'custom-gray': "hsl(0, 0%, 59%)",
      },
      boxShadow: {
        "shadow-custom" : "hsl(223 85% 80%) 0px 3px 8px"
      },
    },
  },
  plugins: [],
};
