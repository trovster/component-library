module.exports = {
  title: 'Movie Listing',
  handle: 'movie-listing',
  status: 'wip',
  default: 'default',
  context: {
    movies: [
      {
        movie: {
          title: 'Movie Title 1',
          rating: 7,
          year: 2020
        }
      },
      {
        movie: {
          title: 'Movie Title 2',
          rating: 4,
          year: 2016
        }
      },
      {
        movie: {
          title: 'Movie Title 3',
          rating: 10,
          year: 2006
        }
      }
    ]
  }
}
