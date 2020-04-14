const fs = require('fs')
const path = require('path')
const markdown = require('@frctl/fractal/src/core/markdown')

module.exports = {
  title: 'About',
  status: 'wip',
  default: 'default',
  context: {
    about: {
      content: markdown(
        fs.readFileSync(path.join(__dirname, 'content', 'content.md'))
      )
    },
    multipack: {
      title: 'The Multipack',
      link: 'https://multipack.co.uk',
      content: markdown(
        fs.readFileSync(path.join(__dirname, 'content', 'multipack.md'))
      )
    },
    geek: {
      title: 'Geek in the Park',
      link: 'https://www.geekinthepark.co.uk',
      content: markdown(
        fs.readFileSync(path.join(__dirname, 'content', 'geek-in-the-park.md'))
      )
    },
    avatar: {
      avatar: {
        modifiers: ['circle']
      }
    }
  }
}
