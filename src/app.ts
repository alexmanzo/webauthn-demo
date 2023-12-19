import fastify from 'fastify';
import router from './router';
import fastifyPrismaClient from 'fastify-prisma-client';

const server = fastify({
  // Logger only for production
  logger: !!(process.env.NODE_ENV !== 'development'),
});

// Middleware: Router
server.register(router);
server.register(fastifyPrismaClient);

export default server;
