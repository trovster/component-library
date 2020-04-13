module.exports = {
  order: 1,
  title: 'Movie Rating',
  handle: 'movie__rating',
  status: 'wip',
  default: 'default',
  context: {
    ratings: [...Array(10).keys()].map(x => ++x)
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
    },
    {
      name: 'inverse',
      label: 'Inverse',
      context: {
        modifiers: ['inverse']
      }
    },
    {
      name: 'large-inverse',
      label: 'Large Inverse',
      context: {
        modifiers: ['large', 'inverse']
      }
    }
  ]
}
