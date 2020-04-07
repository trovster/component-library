module.exports = {
  title: 'Alert',
  status: 'ready',
  default: 'default',
  context: {
    alert: {
      title: 'General Popup',
      text: 'This is a general popup component. Buttons control what should happen, such as closing or further actions.'
    },
    button: {
      button: {
        text: 'Cancel'
      }
    },
    buttonPrimary: {
      button: {
        text: 'Complete',
        modifier: 'success'
      }
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'deactivate',
      label: 'Deactivate',
      context: {
        alert: {
          title: 'Deactivate account',
          text: 'Are you sure you want to deactivate your account? This can not be undone.'
        },
        icon: {
          icon: {
            modifier: 'warning'
          }
        },
        buttonPrimary: {
          button: {
            text: 'Deactivate',
            modifier: 'error'
          }
        }
      }
    }
  ]
}
