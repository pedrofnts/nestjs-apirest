import { ProductRepository } from './product.repository';
import { Body, Controller, Post, Get } from '@nestjs/common';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createUser(@Body() productData) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}
