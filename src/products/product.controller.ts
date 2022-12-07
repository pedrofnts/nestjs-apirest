import { ProductRepository } from './product.repository';
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateProductDTO } from './dto/CreateProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createPost(@Body() productData: CreateProductDTO) {
    this.productRepository.save(productData);
    return productData;
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}
