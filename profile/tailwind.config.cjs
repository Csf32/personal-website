/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base:['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
    },
    borderRadius:{
      'full': '150px'
    },
    insert: {
      '30':'30px',
    },
    extend: {
        colors: {
          blue: '#080f2e',
          black: '#2E0D23',
          white: '#dcdee6'
        },

    },
  plugins: [],
}

}