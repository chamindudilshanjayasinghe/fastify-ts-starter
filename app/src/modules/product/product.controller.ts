import { FastifyReply, FastifyRequest } from 'fastify';
import { ProductService } from './product.service';
import { CreateProductInput, UpdateProductInput } from './product.schema';

const productService = new ProductService();

export class ProductController {
  async createProduct(request: FastifyRequest<{ Body: CreateProductInput }>, reply: FastifyReply) {
    const product = await productService.createProduct(request.body);
    reply.code(201).send(product);
  }

  async updateProduct(request: FastifyRequest<{ Params: { id: string }; Body: UpdateProductInput }>, reply: FastifyReply) {
    const product = await productService.updateProduct(request.params.id, request.body);
    reply.send(product);
  }

  async deleteProduct(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
    await productService.deleteProduct(request.params.id);
    reply.code(204).send();
  }

  async getAllProducts(request: FastifyRequest, reply: FastifyReply) {
    const products = await productService.getAllProducts();
    reply.send(products);
  }
}
