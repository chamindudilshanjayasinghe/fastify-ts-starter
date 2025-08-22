import { FastifyInstance } from 'fastify';
import { ProductController } from './product.controller';
import { CreateProductJsonSchema, UpdateProductJsonSchema } from './product.schema';

const productController = new ProductController();

async function productRoutes(fastify: FastifyInstance) {
  fastify.post(
    '/',
    {
      schema: {
        body: CreateProductJsonSchema,
      },
    },
    productController.createProduct.bind(productController)
  );

  fastify.put(
    '/:id',
    {
      schema: {
        body: UpdateProductJsonSchema,
      },
    },
    productController.updateProduct.bind(productController)
  );

  fastify.delete('/:id', productController.deleteProduct.bind(productController));

  fastify.get('/', productController.getAllProducts.bind(productController));
}

export default productRoutes;
