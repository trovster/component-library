const os = require('os')
const faker = require('faker')

module.exports = {
  order: 2,
  title: 'Movie Review',
  handle: 'movie-review',
  status: 'wip',
  default: 'default',
  context: {
    review: {
      html: faker.lorem.paragraphs(5).split(os.EOL).map(x => x.trim()).map(x => `<p>${x}</p>`).join('')
    }
  }
}
