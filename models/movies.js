const { postgres } = require('./../dbs/postgres-db');

const pgMovieCategoryTable = 'movie_category';
const pgMovieTable = 'movie';


async function getMoviesByCategory(categoryId) {
  const query = `SELECT movie_id as "movieId", movie.name, movie.description, date_of_release as "dateOfRelease", 
  rating, votes, movie_poster_url as "moviePosterUrl", movie_url as "movieUrl", movie.duration, ${pgMovieCategoryTable}.slug 
  as "movieCategory", episodes.season_num, episodes.episode_num, episodes.episode_name, episodes.description as "epiDesc" FROM ${pgMovieTable} JOIN ${pgMovieCategoryTable} ON 
  ${pgMovieTable}.movie_category_id = ${pgMovieCategoryTable}.category_id
  LEFT JOIN episodes ON episodes.series_id = movie.movie_id
  WHERE movie_category_id=${categoryId}`;
  try {
    return postgres.raw(query);
  } catch(err) {
    console.log(err);
    throw err;
  }
};


async function getMoviesCategories() {
  const query = `SELECT category_id as "categoryId", name as "name" FROM ${pgMovieCategoryTable}`;
  try {
    return postgres.raw(query);
  } catch(err) {
    throw err;
  }
};

module.exports = {
  getMoviesCategories,
  getMoviesByCategory
}