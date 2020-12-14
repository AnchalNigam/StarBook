const { gql } = require('apollo-server-fastify');

module.exports = gql`
  extend type RootQuery {
    movies: String!
  }
`;