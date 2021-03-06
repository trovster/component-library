const faker = require('faker')

const make = 9
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    movie: {
      title: faker.lorem.words(3),
      ratings: [
        faker.random.number({ min: 1, max: 10, precision: 1 })
      ],
      year: faker.date.past().getFullYear(),
      desc: faker.lorem.paragraph()
    }
  })
}

module.exports = {
  order: 4,
  title: 'Movie Listing',
  handle: 'movie-listing',
  status: 'wip',
  default: 'default',
  context: {
    movies: items
  }
}
