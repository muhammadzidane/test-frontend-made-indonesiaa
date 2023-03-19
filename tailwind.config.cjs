module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#B46060',
      secondary: '#FFBF9B'
    },
    fontFamily: {
      sans: ['GothamBold', 'sans-serif'], // Default
      thin: ['Gotham-Thin', 'sans-serif'],
      extraLight: ['Gotham-XLight', 'sans-serif'],
      light: ['Gotham-XLight', 'sans-serif'],
      normal: ['GothamBold', 'sans-serif'],
      medium: ['GothamMedium', 'sans-serif'],
      semiBold: ['GothamBlack', 'sans-serif'],
      bold: ['GothamBold', 'sans-serif']
    }
  },
  plugins: []
}
