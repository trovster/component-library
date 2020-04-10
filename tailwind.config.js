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
    }
  },
  variants: {
    opacity: ['responsive', 'hover']
  },
  plugins: []
}
