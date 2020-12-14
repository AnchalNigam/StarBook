const { postgres } = require('./../dbs/postgres-db');

const pgFaqTable = 'person';

async function getMovies() {
  const query = "SELECT first_name from person WHERE id='1'";
  try {
    return postgres.raw(query)
  } catch(err) {
    throw err;
  }
}

module.exports = {
  getMovies
}