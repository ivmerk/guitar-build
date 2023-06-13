import { Injectable } from '@nestjs/common';
import { User } from '../../types/user.interface';
import { CRUDRepository } from '../../types/crud-repository.interface';
import { UserEntity } from './user.entity';
import { UserModel } from './user.model.js';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRepository
  implements CRUDRepository<UserEntity, string, User>
{
  constructor(
    @InjectModel(UserModel.name)
    private readonly userModel: Model<UserModel>
  ) {}

  public async create(item: UserEntity): Promise<User> {
    const newUser = new this.userModel(item);
    return newUser.save();
  }

  public async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email: email }).exec();
  }
}
