const { gql } = require('apollo-server-fastify');
const Movies = require('./movies');
const root = require('./root');

const SchemaDefinition = gql`
	schema {
		query: RootQuery
		mutation: RootMutation
	}
`;

module.exports = [
  SchemaDefinition,
  Movies,
  root
];