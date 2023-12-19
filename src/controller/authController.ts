import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

export default async function authController(fastify: FastifyInstance) {
  fastify.get('/registration-options', async function (_request: FastifyRequest, reply: FastifyReply) {
    
  });
}
