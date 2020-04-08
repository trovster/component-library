const os = require('os')
const faker = require('faker')

module.exports = {
  order: 2,
  title: 'Blog Post',
  handle: 'blog-post',
  status: 'wip',
  default: 'default',
  context: {
    post: {
      title: faker.lorem.words(3),
      date: faker.date.past(),
      html: faker.lorem.paragraphs(5).split(os.EOL).map(x => x.trim()).map(x => `<p>${x}</p>`).join('')
    }
  }
}
