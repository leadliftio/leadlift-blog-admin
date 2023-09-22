/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: '#000080',
        brandGreen: '#50C878',
        brandGreenLighter: '#50CE78',
        brandLightPurple: '#CCCCE5',
        textGray: '#808080',
        brandBlack: '#23282B',
      },
      boxShadow: {
        card: '-8px 0px 20px 0px rgba(0, 0, 0, 0.07), 8px 8px 20px 0px rgba(0, 0, 0, 0.07);',
      },
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      openSans: ['var(--font-open_sans)'],
      poppins: ['var(--font-poppins'],
      raleway: ['Raleway', 'sans-serif'],
      outfit: ['var(--font-outfit)'],
    },
    // screens: {
    //   md: "800px",
    //   // => @media (min-width: 992px) { ... }
    // },
  },
  plugins: [],
}
