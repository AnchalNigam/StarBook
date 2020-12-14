const Movies = require('./../models/movies');

async function getMovies() {
  return Movies.getMovies()
  .then((result) => {
    if(result && result.rows.length > 0) {
      return "Hello " + result.rows[0].first_name + "!";
    } else {
      return "Hello Movies!"
    }
  }).catch(() => {
    return "Hello Movies!";
  })
}

module.exports = {
  getMovies
}