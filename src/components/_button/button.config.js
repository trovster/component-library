module.exports = {
  title: 'Buttons',
  status: 'ready',
  default: 'default',
  context: {
    button: {
      text: 'Default Button'
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
        button: {
          text: 'Success Button',
          modifiers: ['success']
        }
      }
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        button: {
          text: 'Warning Button',
          modifiers: ['warning']
        }
      }
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        button: {
          text: 'Error Button',
          modifiers: ['error']
        }
      }
    }
  ]
}
