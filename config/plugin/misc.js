const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addComponents, theme }) {
  addComponents({
    '.date': {
      color: theme('colors.gray.light')
    },
    h1: {
      fontFamily: theme('fontFamily.display').join(', '),
      color: theme('colors.white')
    },
    h2: {
      fontFamily: theme('fontFamily.display').join(', '),
      color: theme('colors.white')
    },
    h3: {
      fontFamily: theme('fontFamily.display').join(', '),
      color: theme('colors.white')
    },
    h4: {
      fontFamily: theme('fontFamily.display').join(', '),
      color: theme('colors.white')
    }
  })
})
