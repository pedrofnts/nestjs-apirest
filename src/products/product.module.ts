import { ProductRepository } from './product.repository';
import { ProductController } from './product.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {}
