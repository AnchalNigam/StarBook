const { gql } = require('apollo-server-fastify');
const root = require('./root');
const movieCategories = require('./movie-categories');
const scalar = require('./scalar');
const moviesByCategory = require('./movies-by-category');

const SchemaDefinition = gql`
	schema {
		query: RootQuery
		mutation: RootMutation
	}
`;

module.exports = [
  SchemaDefinition,
	root,
	movieCategories,
	scalar,
	moviesByCategory
];