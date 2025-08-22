import { hashPassword, comparePassword } from '../../utils/hash';
import { FastifyInstance } from 'fastify';
import { LoginInput, RegisterInput } from './auth.schema';
import { prisma } from '../../utils/prisma';

export class AuthService {
  constructor(private fastify: FastifyInstance) {}

  async register(input: RegisterInput) {
    const hashedPassword = await hashPassword(input.password);
    const user = await prisma.user.create({
      data: {
        email: input.email,
        password: hashedPassword,
      },
    });
    return { id: user.id, email: user.email };
  }

  async login(input: LoginInput) {
    const user = await prisma.user.findUnique({ where: { email: input.email } });
    if (!user) {
      throw this.fastify.httpErrors.unauthorized('Invalid email or password');
    }

    const isPasswordValid = await comparePassword(input.password, user.password);
    if (!isPasswordValid) {
      throw this.fastify.httpErrors.unauthorized('Invalid email or password');
    }

    const token = this.fastify.jwt.sign({ id: user.id, email: user.email });
    return token;
  }
}
