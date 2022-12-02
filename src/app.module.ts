import { ProductModule } from './products/product.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule, ProductModule],
})
export class AppModule {}
