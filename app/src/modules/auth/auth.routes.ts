import { FastifyInstance } from 'fastify';
import { AuthController } from './auth.controller';
import { RegisterJsonSchema, LoginJsonSchema } from './auth.schema';

async function authRoutes(fastify: FastifyInstance) {
  const authController = new AuthController(fastify);

  fastify.post(
    '/register',
    {
      schema: {
        body: RegisterJsonSchema,
      },
    },
    authController.register.bind(authController)
  );
  fastify.post(
    '/login',
    {
      schema: {
        body: LoginJsonSchema,
      },
    },
    authController.login.bind(authController)
  );
}

export default authRoutes;
