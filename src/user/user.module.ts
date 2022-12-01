import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}
