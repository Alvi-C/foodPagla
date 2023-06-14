/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Roboto: "'Roboto', sans-serif",
        'tackyShoes': ['PIZZADUDE', 'sans-serif']
      },
      colors: {
        'light-mistyRose': '#F9E6E6',
        'light-oldLace': '#F9F6E6',
        'light-alabaster': '#EBF9E6',
        'light-honeydew': '#E6F9F1',
        'light-lavender': '#E6F1F9',
        'light-purpleDew': '#EBE6F9',
        'light-pinkLace': '#FFDDF4',
        'light-softGrey': '#f2f2f2',
        'candyRed': '#C61F2B',
        'teslaRed': '#E31937 ',
        'coralRed': '#F74539',
        'fadeRed': '#d0563c ',
        'gold': '#E5B723',
        'fadeYellow': '#eaad31',
        'schoolBusYellow': '#FCD800',
        'orange': '#FF7722',
        'barbiePink': '#DA1884',
        'pear': '#D1E231',
        'blueberry': '#4F86F7',
        'blueJeans': '#64B5F3',
        'candyGreen': '#25D366',
        'energyGreen': '#1CA350',
        'fadeBlack': '#1e1e1e',
        'charcoal': '#36454F',
        'silver': '#e3e8ef',
        'young-green': '#88c540',
        'young-blue': '#007AFF',
        'young-cerise': '#e93266',
        'young-aquamarine': '#68DBBA'
      }
    },
  },
  plugins: [],
}

