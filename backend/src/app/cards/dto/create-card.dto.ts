import {
  IsIn,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import {
  GuitarType,
  guitarType,
  numberOfStrings,
} from '../../../types/guitar-type.enum.js';
import { DESCRIPTION_LENGTH, NAME_LENGTH } from '../cards.constant.js';

export class CreateCardDto {
  @IsString()
  @MinLength(NAME_LENGTH.Min)
  @MaxLength(NAME_LENGTH.Max)
  public name: string;

  @IsString()
  @MinLength(DESCRIPTION_LENGTH.Min)
  @MaxLength(DESCRIPTION_LENGTH.Max)
  public description: string;

  @IsString()
  public picture: string;

  @IsIn(guitarType)
  public typeOfGuitar: GuitarType;

  @IsString()
  public article: string;

  @IsIn(numberOfStrings)
  @IsNumber()
  public numberOfStrings: number;

  @IsNumber()
  public price: number;
}
