const merge = require('deepmerge')
const plugin = require('tailwindcss/plugin')
const typography = require('./config/typography')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Roboto Slab', 'serif'],
      body: ['Roboto', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      white: '#fdfdfd',
      black: '#1d2021',
      background: '#1d2021',

      gray: {
        dark: '#1d2021',
        default: '#333',
        light: '#666'
      },

      blue: {
        default: '#2dcdff'
      },
      pink: {
        default: '#ff1fa5'
      },
      yellow: {
        default: '#fff171'
      },
      green: {
        default: '#9dff6f'
      },

      primary: '#2dcdff', // theme => theme('colors.blue.default'),
      accent: '#ff1fa5' // theme => theme('colors.pink.default'),
    },
    extend: {
      typography: merge(typography, {
        ...typography,
        h1: {
          fontFamily: 'Roboto Slab, serif',
          fontWeight: 300,
          color: '#fdfdfd' // theme('colors.white')
        },
        h2: {
          fontFamily: 'Roboto Slab, serif',
          fontWeight: 300,
          color: '#fdfdfd' // theme('colors.white')
        },
        h3: {
          fontFamily: 'Roboto Slab, serif',
          fontWeight: 300,
          color: '#fdfdfd' // theme('colors.white')
        },
        h4: {
          fontFamily: 'Roboto Slab, serif',
          fontWeight: 300,
          color: '#fdfdfd' // theme('colors.white')
        },
        p: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 100
        },
        li: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 300
        },
        strong: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 500
        },
        a: {
          color: '#fdfdfd', // theme('colors.white'),
          backgroundColor: '#2dcdff', // theme('colors.blue.default')
          fontWeight: 300,
          padding: '0 5px',
          '&:hover': {
            backgroundColor: '#ff1fa5' // theme('colors.pink.default'),
          },
          '&:focus': {
            backgroundColor: '#ff1fa5' // theme('colors.pink.default'),
          }
        },
        'a:hover': {
          textDecoration: 'none'
        },
        'a code': {
          backgroundColor: '#2dcdff'
        },
        'a:hover code, a:focus code': {
          backgroundColor: '#ff1fa5' // theme('colors.pink.default'),
        },
        code: {
          backgroundColor: '#333' // theme('colors.gray.default'),
        },
        pre: {
          backgroundColor: '#333', // theme('colors.gray.default'),
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          maxWidth: '52rem'
        },
        'pre code': {
          fontSize: '1em'
        },
        'pre.code, pre.code code': {
          backgroundColor: '#002b36'
        },
        blockquote: {
          fontFamily: 'Roboto Slab, serif',
          fontStyle: 'italic',
          borderLeftWidth: '4px',
          borderLeftStyle: 'solid',
          borderLeftColor: '#ff1fa5', // theme('colors.pink.default'),
          paddingLeft: '1.25rem',
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          maxWidth: '54rem'
        },
        'blockquote > *': {
          fontSize: '1.6rem'
        },
        '.lede': {
          fontSize: '1.6rem',
          lineHeight: 1.25
        }
      })
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('./config/plugin/misc'),
    require('./config/plugin/listing.js'),
    require('./config/plugin/blog.js'),
    require('./config/plugin/movie.js'),
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.thing': {
          backgroundColor: theme('colors.blue.default'),
          color: theme('colors.white'),
          '&:hover, &:focus': {
            backgroundColor: theme('colors.pink.default')
          }
        }
      })
    })
  ]
}
