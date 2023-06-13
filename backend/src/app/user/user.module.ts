import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository.js';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './user.model.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
  ],
  providers: [UserRepository],
})
export class UserModule {}
