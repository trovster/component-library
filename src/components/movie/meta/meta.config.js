const faker = require('faker')

module.exports = {
  order: 3,
  title: 'Movie Meta',
  handle: 'movie__meta',
  status: 'wip',
  default: 'default',
  context: {
    meta: {
      released: faker.date.past().getFullYear(),
      runtime: '1 hour 52 minutes',
      director: faker.name.findName(),
      writer: faker.name.findName(),
      genre: 'Comedy'
    }
  }
}
