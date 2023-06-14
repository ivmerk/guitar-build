import { Expose, Transform } from 'class-transformer';

export class LoggedUserRdo {
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public email: string;

  @Expose()
  public accessToken: string;
}
