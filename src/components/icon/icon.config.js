module.exports = {
  title: 'Icons',
  status: 'ready',
  default: 'default',
  context: {
    icon: {
      svg: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
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
          // svg: "",
          modifiers: ['success']
        }
      }
    },
    {
      name: 'warning',
      label: 'Warning',
      context: {
        icon: {
          // svg: "",
          modifiers: ['warning']
        }
      }
    },
    {
      name: 'error',
      label: 'Error',
      context: {
        icon: {
          // svg: "",
          modifiers: ['error']
        }
      }
    }
  ]
}
