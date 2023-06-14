import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository.js';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel, UserSchema } from './user.model.js';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { getJwtOptions } from '../../utils/get-jwt-options.js';
import { JwtAccessStrategy } from '../config-app/jwt-access.strategy.js';
import { LocalStrategy } from '../config-app/local.strategy.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserSchema }]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: getJwtOptions,
    }),
  ],
  controllers: [UserController],
  providers: [UserRepository, UserService, JwtAccessStrategy, LocalStrategy],
})
export class UserModule {}
