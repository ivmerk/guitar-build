import { TokenPayload } from '../types/token-payload.interface';
import { User } from '../types/user.interface';

export function createJWTPayload(user: User): TokenPayload {
  return {
    sub: user._id,
    email: user.email,
    name: user.name,
  };
}
