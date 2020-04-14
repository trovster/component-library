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

      background: {
        default: '#1d2021',
        dark: '#1d2021',
        light: '#fdfdfd'
      },

      text: {
        default: '#fdfdfd',
        dark: '#1d2021',
        light: '#fdfdfd'
      },

      gray: {
        default: '#333',
        dark: '#1d2021',
        light: '#666'
      },

      blue: {
        default: '#2dcdff',
        dark: '#2dcdff',
        light: '#2dcdff'
      },
      pink: {
        default: '#ff1fa5',
        dark: '#ff1fa5',
        light: '#ff1fa5'
      },
      yellow: {
        default: '#fff171',
        dark: '#fff171',
        light: '#fff171'
      },
      green: {
        default: '#9dff6f',
        dark: '#9dff6f',
        light: '#9dff6f'
      },

      primary: '#2dcdff', // theme => theme('colors.blue.default'),
      accent: '#ff1fa5' // theme => theme('colors.pink.default'),
    },
    extend: {}
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
