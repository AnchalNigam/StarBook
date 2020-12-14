const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type RootQuery {
		"Deployed version of graph api"
		version: String!
	}

	type RootMutation {
		"No operation mutation just because empty mutation declaration is not allowed"
		noop: String
	}

	type RootSubscription {
		"No operation mutation just because empty type declaration is not allowed"
		noop: String
	}
`;
