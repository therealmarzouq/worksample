module.exports = {
  content: ['./src/**/*.{html,js}'],
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#ecebf5',
          200: '#696d8c',
        },
        secondary: {
          100: '#060213',
        },
        blue: {
          100: '#3e68ff',
          200: '#6837ef',
        },
        red: {
          100: '#fb6491',
          200: '#f25a68',
          300: '#f05d23',
        },
        purple: {
          100: '#07c9e2',
        },
        green: {
          100: '#25bb87',
        },
      },
      fontFamily: {
        sans: ['Gelion', 'sans-serif'],
        'sans-medium': ['Gelion-Medium', 'sans-serif'],
        'sans-semibold': ['Gelion-SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
