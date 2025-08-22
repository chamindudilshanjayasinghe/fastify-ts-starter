import { prisma } from '../../utils/prisma';
import { CreateProductInput, UpdateProductInput } from './product.schema';

export class ProductService {
  async createProduct(input: CreateProductInput) {
    return prisma.product.create({ data: input });
  }

  async updateProduct(id: string, input: UpdateProductInput) {
    return prisma.product.update({ where: { id }, data: input });
  }

  async deleteProduct(id: string) {
    await prisma.product.delete({ where: { id } });
  }

  async getAllProducts() {
    return prisma.product.findMany();
  }
}
