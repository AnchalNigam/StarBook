const { gql } = require('apollo-server-fastify');

module.exports = gql`

interface Movie { 
  movieId: ID!
  name: String!
  description: String
  dateOfRelease: Date
  rating: Float
  votes: Int
  moviePosterUrl: String
  movieCategory: String!
}

type Time {
  day: String
  hours: String
  minutes: String
}

type GeneralMovies implements Movie {
  movieId: ID!
  name: String!
  description: String
  dateOfRelease: Date
  rating: Float
  votes: Int
  moviePosterUrl: String
  movieCategory: String!
  movieUrl: String
  duration: Time
}

type Episode {
  episodeId: ID!
  movieId: ID!
  seasonNum: Int!
  episodeNum: Int!
  episodeName: String!
  description: String
  duration: Time
  episodeUrl: String
}

type WebSeries implements Movie {
  movieId: ID!
  name: String!
  description: String
  dateOfRelease: Date
  rating: Float
  votes: Int
  moviePosterUrl: String
  movieCategory: String!
  episodes: [String]
}
extend type RootQuery {
  moviesByCategory(categoryId: ID!): [Movie]!
}
`;