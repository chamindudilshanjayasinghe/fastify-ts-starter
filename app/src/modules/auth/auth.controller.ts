import { FastifyReply, FastifyRequest, FastifyInstance } from 'fastify';
import { LoginInput, RegisterInput } from './auth.schema';
import { AuthService } from './auth.service';

export class AuthController {
  private authService: AuthService;

  constructor(fastify: FastifyInstance) {
    this.authService = new AuthService(fastify);
  }

  async register(request: FastifyRequest<{ Body: RegisterInput }>, reply: FastifyReply) {
    const user = await this.authService.register(request.body);
    reply.code(201).send(user);
  }

  async login(request: FastifyRequest<{ Body: LoginInput }>, reply: FastifyReply) {
    const token = await this.authService.login(request.body);
    reply.send({ token });
  }
}
