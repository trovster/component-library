module.exports = {
  title: 'Avatar',
  status: 'ready',
  default: 'default',
  context: {
    avatar: {}
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'small',
      label: 'Small',
      context: {
        avatar: {
          modifiers: ['small']
        }
      }
    },
    {
      name: 'circle',
      label: 'Round',
      context: {
        avatar: {
          modifiers: ['circle']
        }
      }
    },
    {
      name: 'small-circle',
      label: 'Small Round',
      context: {
        avatar: {
          modifiers: ['small', 'circle']
        }
      }
    }
  ]
}
