import { IsArray } from 'class-validator';
import { GuitarType } from '../../../types/guitar-type.enum';

export class FiltersDto {
  @IsArray()
  public guitarType: GuitarType[];

  @IsArray()
  public numberOfStrings: number[];
}
