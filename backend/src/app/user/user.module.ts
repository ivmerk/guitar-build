import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository.js';

@Module({
  imports: [],
  providers: [UserRepository],
})
export class UserModule {}
