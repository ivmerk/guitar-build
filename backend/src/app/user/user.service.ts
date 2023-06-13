import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../types/user.interface';
import { UserRepository } from './user.repository.js';
import { UserEntity } from './user.entity.js';
import { AUTH_USER_EXISTS } from './user.constant.js';
import dbConfig from '../config-app/db.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,

    @Inject(dbConfig.KEY)
    private readonly databaseConfig: ConfigType<typeof dbConfig>
  ) {
    console.log(databaseConfig.host);
    console.log(databaseConfig.user);
  }
  public async register(dto: CreateUserDto): Promise<User> {
    const { name, email, password } = dto;
    console.log(this.databaseConfig.host);
    const newUser = {
      name,
      email,
      passwordHash: '',
    };

    const existUser = await this.userRepository.findByEmail(email);

    if (existUser) {
      throw new ConflictException(AUTH_USER_EXISTS);
    }
    const userEntity = await new UserEntity(newUser).setPassword(password);

    return this.userRepository.create(userEntity);
  }
}
