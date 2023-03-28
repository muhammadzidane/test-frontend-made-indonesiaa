module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#000000',
      secondary: '#121212',
      "black-1": "#070707",
      "white-1": '#FFFFFF',
      'gray-1': '#d9dadc',
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
