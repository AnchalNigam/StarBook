
const Movies = require('./../../services/movies');

module.exports = {
  RootQuery: {
    moviesByCategory: moviesByCategory,
    movieCategories: Movies.getMovieCategories,
  },
  Movie: {
    __resolveType: Movie => {
      const MovieTypeMap = {
        'bollywood':  'GeneralMovies',
        'hollywood': 'GeneralMovies',
        'web-series': 'WebSeries'
      }
      return Movie && MovieTypeMap[Movie.movieCategory];
    }
  },
  WebSeries: {
    episodes: (parent) => { console.log(parent); return ['hassu']}
  }
};

function moviesByCategory(parent, { categoryId }) {
  return Movies.getMovieByCategory(categoryId);
}