module.exports = {
  title: 'Buttons',
  status: 'ready',
  default: 'default',
  context: {
    button: {
      text: 'Default Button',
      modifier: 'default'
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
          modifier: 'success'
        }
      }
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        button: {
          text: 'Warning Button',
          modifier: 'warning'
        }
      }
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        button: {
          text: 'Error Button',
          modifier: 'error'
        }
      }
    }
  ]
}
