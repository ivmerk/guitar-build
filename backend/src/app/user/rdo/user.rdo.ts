import { Expose, Transform } from 'class-transformer';

export class UserRdo {
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public name: string;

  @Expose()
  public email: string;
}
