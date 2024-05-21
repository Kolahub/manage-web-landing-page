/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'title': ['"Be Vietnam Pro"', 'san-serif']
      },
      width: {
        '2/5': '45%', 
        '97': '140rem'
      },
      boxShadow: {
        'custom-red': '0 4px 6px -1px rgba(255, 0, 0, 0.1), 0 2px 4px -1px rgba(255, 0, 0, 0.06)',
        'custom-green': '0 4px 6px -1px rgba(0, 255, 0, 0.1), 0 2px 4px -1px rgba(0, 255, 0, 0.06)', 
        'custom-blue': '0 4px 6px -1px rgba(0, 0, 255, 0.1), 0 2px 4px -1px rgba(0, 0, 255, 0.06)', 
      },

      backgroundImage: {
        'tablet-pattern': "url('../src/assets/images/bg-tablet-pattern.svg')",
        'simplify-section-desktop': "url('../src/assets/images/bg-simplify-section-desktop.svg')",
        'simplify-section-mobile': "url('../src/assets/images/bg-simplify-section-mobile.svg')",
        
      }, 
      colors: {
        'bright-red' : 'hsl(12, 88%, 59%)', 
        'dark-blue': 'hsl(228, 39%, 23%)', 
        'dark-grayish-blue': 'hsl(227, 12%, 61%)',
        'very-dark-blue': 'hsl(233, 12%, 13%)',
        'very-pale-red': 'hsl(13, 100%, 96%)',
        'very-light-gray': 'hsl(0, 0%, 98%)'
      }
    },
  },
  plugins: [],
}