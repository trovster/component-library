module.exports = {
  title: 'Icons',
  status: 'ready',
  default: 'default',
  context: {
    icon: {
      icon: 'information.svg'
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'success',
      label: 'Success',
      context: {
        icon: {
          icon: 'plus-circle.svg',
          modifiers: ['success']
        }
      }
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        icon: {
          icon: 'exclamation.svg',
          modifiers: ['warning']
        }
      }
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        icon: {
          icon: 'x-circle.svg',
          modifiers: ['error']
        }
      }
    }
  ]
}
