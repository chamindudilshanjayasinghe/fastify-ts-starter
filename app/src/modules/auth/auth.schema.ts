import { z } from 'zod';
import fromZodSchema from 'zod-to-json-schema';

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const RegisterJsonSchema = fromZodSchema(RegisterSchema);

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const LoginJsonSchema = fromZodSchema(LoginSchema);

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
