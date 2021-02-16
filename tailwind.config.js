const colors = require('windicss/colors')
const defaultTheme = require('windicss/defaultTheme')

module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
      },
      fontFamily: {
        mono: ['Fira Code var', ...defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        serif: ['Literata var', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
}
