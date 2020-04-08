module.exports = {
  title: 'Blurb',
  status: 'ready',
  default: 'default',
  context: {
    blurb: {
      text: 'My name is Trevor Morris & I am a movie-loving, mountain bike-riding web developer from the UK.'
    },
    avatar: {
      avatar: {
        modifiers: ['circle', 'small']
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'large',
      label: 'Large',
      context: {
        blurb: {
          text: 'My name is Trevor Morris and I am a web developer from the UK. I love to ride bikes and watch movies.',
          modifiers: ['large']
        },
        avatar: {
          avatar: {
            modifiers: ['circle']
          }
        }
      }
    }
  ]
}
