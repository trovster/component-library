const faker = require('faker')

module.exports = {
  order: 4,
  title: 'Movie Listing',
  handle: 'movie-listing',
  status: 'wip',
  default: 'default',
  context: {
    movies: [
      {
        movie: {
          title: 'Movie Title 1',
          ratings: [
            faker.random.number({ min: 1, max: 10, precision: 1 })
          ],
          year: faker.date.past().getFullYear(),
          desc: faker.lorem.paragraph()
        }
      },
      {
        movie: {
          title: 'Movie Title 2',
          ratings: [
            faker.random.number({ min: 1, max: 10, precision: 1 })
          ],
          year: faker.date.past().getFullYear(),
          desc: faker.lorem.paragraph()
        }
      },
      {
        movie: {
          title: 'Movie Title 3',
          ratings: [
            faker.random.number({ min: 1, max: 10, precision: 1 })
          ],
          year: faker.date.past().getFullYear(),
          desc: faker.lorem.paragraph()
        }
      },
      {
        movie: {
          title: 'Movie Title 4',
          ratings: [
            faker.random.number({ min: 1, max: 10, precision: 1 })
          ],
          year: faker.date.past().getFullYear(),
          desc: faker.lorem.paragraph()
        }
      },
      {
        movie: {
          title: 'Movie Title 5',
          ratings: [
            faker.random.number({ min: 1, max: 10, precision: 1 })
          ],
          year: faker.date.past().getFullYear(),
          desc: faker.lorem.paragraph()
        }
      }
    ]
  }
}
