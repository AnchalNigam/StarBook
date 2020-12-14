const { ApolloServer } = require('apollo-server-fastify');

const schema = require('./schema');
const typedefs = require('./schema/typedefs');
const resolvers = require('./schema/resolvers');

const graphServer = new ApolloServer({
  typeDefs: typedefs,
  resolvers: resolvers,
  introspection: true,
	playground: true,
})

async function initGraphServer(fastify) {
  await fastify.register(graphServer.createHandler())
}

module.exports = initGraphServer;