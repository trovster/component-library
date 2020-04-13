const faker = require('faker')

const make = 4
const items = []

for (let i = 0; i < make; i++) {
  items.push({
    post: {
      title: faker.lorem.words(3),
      date: faker.date.past(),
      desc: faker.lorem.paragraph()
    }
  })
}

module.exports = {
  order: 1,
  title: 'Blog Listing',
  handle: 'blog-listing',
  status: 'wip',
  default: 'default',
  context: {
    posts: items
  }
}
