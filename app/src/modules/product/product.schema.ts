import { z } from 'zod';
import fromZodSchema from 'zod-to-json-schema';

export const CreateProductSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  price: z.number().positive(),
});

export const CreateProductJsonSchema = fromZodSchema(CreateProductSchema);

export const UpdateProductSchema = z.object({
  name: z.string().optional(),
  description: z.string().optional(),
  price: z.number().positive().optional(),
});

export const UpdateProductJsonSchema = fromZodSchema(UpdateProductSchema);

export type CreateProductInput = z.infer<typeof CreateProductSchema>;
export type UpdateProductInput = z.infer<typeof UpdateProductSchema>;
