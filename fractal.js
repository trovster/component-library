const fs = require('fs')
const path = require('path')
const faker = require('faker')
const packageJson = require('./package.json')

/* Create a new Fractal instance and export it for use elsewhere if required. */
const fractal = (module.exports = require('@frctl/fractal').create())

// Theme configuration.
const theme = require('@frctl/mandelbrot')({
  lang: 'en-gb',
  nav: ['docs', 'components'],
  panels: ['notes', 'html', 'view', 'info']
})

// Setup handlebar helpers.
const hbs = require('@frctl/handlebars')({
  helpers: {
    titlecase: (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()),
    lowercase: (str) => str.toLowerCase(),
    uppercase: (str) => str.toUpperCase(),
    json: (json) => JSON.stringify(json),
    modifier: (prefix, modifiers) => {
      return (modifiers || []).map((modifier) => {
        return `${prefix}--${modifier}`
      }).concat([prefix]).map((e, i, arr) => i === 0 ? arr[arr.length - 1] : arr[i - 1]).join(' ')
    },
    icon: (icon) => {
      const staticPath = fractal.web.get('static.path')
      const file = path.join(staticPath, 'icons', `md-${icon}`)

      return fs.readFileSync(file)
    },
    date: (x) => {
      const date = faker.date.past()

      const getOrdinalNum = (n) => {
        return n + (n > 0 ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10] : '')
      }

      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ]

      const day = getOrdinalNum(date.getDate())
      const month = monthNames[date.getMonth()]
      const year = date.getFullYear()

      return `${day} ${month} ${year}`
    },
    ifeq: (a, b, options) => {
      if (a === b) {
        return options.fn(this)
      }

      return options.inverse(this)
    }
  }
})

/* Set the title of the project. */
fractal.set('project.title', packageJson.title)

/* Component Setup */
fractal.components.engine(hbs)
fractal.components.set('path', path.join(__dirname, 'src', 'components'))
fractal.components.set('default.preview', '@preview')
fractal.components.set('default.status', 'wip')
fractal.components.set('ext', '.hbs')
fractal.components.set('default.context', {
  'site-name': packageJson.title
})

/* Documentation */
fractal.docs.set('path', path.join(__dirname, 'src', 'docs'))
fractal.docs.set('default.status', 'draft')
fractal.docs.set('ext', '.md')

/* Specify a directory of static assets. */
fractal.web.set('static.path', path.join(__dirname, 'public'))

/* Set the static HTML build destination. */
fractal.web.set('builder.dest', path.join(__dirname, 'build'))

/* Set the theme. */
fractal.web.theme(theme)
