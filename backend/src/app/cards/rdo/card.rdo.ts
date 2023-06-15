import { Expose, Transform } from 'class-transformer';
import { GuitarType } from '../../../types/guitar-type.enum';

export class CardRdo {
  @Transform(({ obj }) => obj._id.toString())
  @Expose({ name: '_id' })
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public description: string;

  @Expose()
  public data: Date;

  @Expose()
  public picture: string;

  @Expose()
  public typeOfGuitar: GuitarType;

  @Expose()
  public article: string;

  @Expose()
  public numberOfStrings: string;

  @Expose()
  public price: string;
}
