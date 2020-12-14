const fastify = require('fastify')({
  logger: true,
});

// Import Swagger Options
const swagger = require('./config/swagger');
const fasitySwagger = require('fastify-swagger');
(async () => {
  try {
    // Register Swagger
    await fastify.register(fasitySwagger, swagger.options);
    await fastify.register(require('./graphql-server'));
    await fastify.listen(3030);
    fastify.swagger();
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch(err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();

fastify.get('/', async () => {
  return 'Welcome to StarBooK Apis.'
});