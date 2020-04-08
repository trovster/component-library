const faker = require('faker')

module.exports = {
  order: 5,
  title: 'Movie',
  handle: 'movie',
  status: 'wip',
  default: 'default',
  context: {
    movie: {
      title: 'Movie Title',
      ratings: [
        faker.random.number({ min: 1, max: 10, precision: 1 })
      ],
      year: faker.date.past().getFullYear(),
      desc: faker.lorem.paragraph()
    }
  }
}
