/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', '*.html'],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {
      colors: {
        softred: 'hsl(10, 79%, 65%)',
        cyan: 'hsl(186, 34%, 60%)',
        darkbrown: 'hsl(25, 47%, 15%)',
        mediumbrown: 'hsl(28, 10%, 53%)',
        cream: 'hsl(27, 66%, 92%)',
        paleorange: 'hsl(33, 100%, 98%)'
      }
    }
  },
  plugins: []
};
