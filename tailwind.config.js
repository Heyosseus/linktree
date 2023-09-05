/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#E4CABC',
        secondary: '#A383FF',
        button: '#8BD3DD'
      },
      width: {
        btn: '653px'
      },
      backgroundImage: {
        landingBg: 'linear-gradient(180deg, #11101A 0%, #08080D 100.52%);',
        transparentLandingBg:
          'linear-gradient(180deg, rgba(17, 16, 26, 0.8) 0%, rgba(8, 8, 13, 0.8) 100.52%);'
      }
    }
  },
  plugins: []
}
