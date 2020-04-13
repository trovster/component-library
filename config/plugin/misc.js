const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.date': {
      color: theme('colors.gray.light')
    }
  })
})
