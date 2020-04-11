const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      display: ['Noto Serif', 'serif'],
      body: ['Montserrat', 'sans-serif']
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
      typography: {
        h1: {
          color: '#fdfdfd' // theme('colors.white')
        },
        h2: {
          color: '#fdfdfd' // theme('colors.white')
        },
        h3: {
          color: '#fdfdfd' // theme('colors.white')
        },
        h4: {
          color: '#fdfdfd' // theme('colors.white')
        },
        p: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 300
        },
        li: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 300
        },
        strong: {
          color: '#fdfdfd', // theme('colors.white'),
          fontWeight: 700
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
        'a code': {
          backgroundColor: '#2dcdff'
        },
        'a:hover code': {
          backgroundColor: '#ff1fa5' // theme('colors.pink.default'),
        },
        'a:focus code': {
          backgroundColor: '#ff1fa5' // theme('colors.pink.default'),
        },
        code: {
          backgroundColor: '#333' // theme('colors.gray.default'),
        },
        pre: {
          padding: '1rem 1.5rem',
          backgroundColor: '#333', // theme('colors.gray.default'),
          marginLeft: '50%',
          transform: 'translateX(-50%)',
          width: '100vw',
          maxWidth: '52rem'
        },
        blockquote: {
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
        }
      }
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(({ addComponents, theme }) => {
      const styles = {
        '.thing': {
          backgroundColor: theme('colors.blue.default'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.pink.default')
          },
          '&:focus': {
            backgroundColor: theme('colors.pink.default')
          }
        }
      }

      addComponents(styles)
      addComponents({
        '.date': {
          color: theme('colors.gray.light')
        }
      })
    })
  ]
}
