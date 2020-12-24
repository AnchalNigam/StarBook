const { gql } = require('apollo-server-fastify');

module.exports = gql`
  type MovieCategory {
    categoryId: ID!
    name: String!
  }
  extend type RootQuery {
    movieCategories: [MovieCategory]!
    episodes:[String]!
  }
`;