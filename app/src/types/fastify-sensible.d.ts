import '@fastify/sensible';

declare module 'fastify' {
  interface FastifyInstance {
    httpErrors: {
      badRequest: (message?: string) => Error;
      unauthorized: (message?: string) => Error;
      forbidden: (message?: string) => Error;
      notFound: (message?: string) => Error;
      internalServerError: (message?: string) => Error;
      // Add other HTTP error methods as needed
    };
  }
}
