module.exports = {
  title: 'Social Media Icons',
  label: 'Social Media',
  handle: 'social',
  status: 'ready',
  default: 'default',
  context: {
    icons: [
      {
        key: 'facebook',
        title: 'Facebook',
        url: 'https://www.facebook.com/trovster',
        icon: ''
      },
      {
        key: 'twitter',
        title: 'Twitter',
        url: 'https://twitter.com/trovster',
        icon: ''
      },
      {
        key: 'github',
        title: 'GitHub',
        url: 'https://github.com/trovster',
        icon: ''
      },
      {
        key: 'instagram',
        title: 'Instagram',
        url: 'https://instagram.com/trovster',
        icon: ''
      },
      {
        key: 'lastfm',
        title: 'Last.fm',
        url: 'https://www.last.fm/user/trovster',
        icon: ''
      },
      {
        key: 'linkedin',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/trovster/',
        icon: ''
      }
    ]
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
        modifiers: ['large']
      }
    }
  ]
}
