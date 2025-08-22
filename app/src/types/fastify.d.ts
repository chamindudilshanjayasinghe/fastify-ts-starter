import '@fastify/jwt';

declare module 'fastify' {
  interface FastifyInstance {
    jwt: {
      sign: (payload: object) => string;
      verify: (token: string) => object;
    };
  }

  interface FastifyRequest {
    jwtVerify: () => Promise<void>;
  }

  interface FastifyReply {
    jwtSign: (payload: object) => string;
  }
}
