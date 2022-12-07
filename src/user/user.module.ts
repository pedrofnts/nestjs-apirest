import { UserRepository } from './user.repository';
import { UserController } from './user.controller';
import { Module } from '@nestjs/common';
import { EmailIsUniqueValidator } from './validation/email-is-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, EmailIsUniqueValidator],
})
export class UserModule {}
