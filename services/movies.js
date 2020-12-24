const movies = require('./../models/movies');

async function getMovieCategories() {
  return movies.getMoviesCategories()
  .then((result) => {
    if(result && result.rows.length > 0) {
      return result.rows;
    } else {
      return [];
    }
  }).catch(() => {
    return [];
  });
}

async function getMovieByCategory(categoryId) {
  return movies.getMoviesByCategory(categoryId)
  .then((result) => {
    // console.log(result.rows, 'result')
    if(result && result.rows.length > 0) {
      return result.rows;
    } else {
      return [];
    }
  }).catch((err) => {
    console.log(err)
    return [];
  });
}

module.exports = {
  getMovieCategories,
  getMovieByCategory
}