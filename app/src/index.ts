import Fastify, { FastifyInstance } from 'fastify';
import pino from 'pino';
import { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import authRoutes from './modules/auth/auth.routes';
import productRoutes from './modules/product/product.routes';
import sensible from '@fastify/sensible';

const logger = pino({ level: 'info' });
const server: Server = createServer();
const fastify: FastifyInstance<Server, IncomingMessage, ServerResponse> = Fastify({
  logger: true,
  serverFactory: (handler) => {
    server.on('request', handler);
    return server;
  },
});

fastify.get('/', async (request, reply) => {
  return { message: 'Hello, Fastify!' };
});

fastify.register(authRoutes, { prefix: '/auth' });
fastify.register(productRoutes, { prefix: '/products' });
fastify.register(sensible);

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
    logger.info('Server is running on http://localhost:3000');
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
};

start();
