import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './user.constant.js';
import { User } from '../../types/user.interface.js';

export class UserEntity implements User {
  public _id?: string;
  public name: string;
  public email: string;
  public passwordHash: string;

  constructor(data: User) {
    this._id = data._id;
    this.name = data.name;
    this.email = data.email;
    this.passwordHash = data.passwordHash;
  }

  public toObject() {
    return { ...this };
  }

  public async setPassword(password: string) {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
