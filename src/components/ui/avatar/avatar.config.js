module.exports = {
  title: 'Avatar',
  status: 'ready',
  default: 'default',
  context: {
    avatar: {
      modifier: 'default'
    }
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
          modifier: 'small'
        }
      }
    },
    {
      name: 'circle',
      label: 'Round',
      context: {
        avatar: {
          modifier: 'circle'
        }
      }
    },
    {
      name: 'small-circle',
      label: 'Small Round',
      context: {
        avatar: {
          modifier: 'small avatar--circle'
        }
      }
    }
  ]
}
