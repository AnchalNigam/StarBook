
const Movies = require('./../../services/movies');

module.exports = {
  RootQuery: {
    movies: Movies.getMovies,
  }
};
