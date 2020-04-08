module.exports = {
  title: 'Movie Rating',
  handle: 'movie-rating',
  status: 'wip',
  default: 'default',
  context: {
    ratings: [...Array(10).keys()].map(x => ++x)
  }
}
