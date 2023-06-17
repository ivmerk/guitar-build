import {
  IsIn,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';
import {
  GuitarType,
  guitarTypes,
  numberOfStrings,
} from '../../../types/guitar-type.enum.js';
import {
  DESCRIPTION_LENGTH,
  GUITAR_PRISE,
  NAME_LENGTH,
} from '../cards.constant.js';

export class CreateCardDto {
  @IsString()
  @MinLength(NAME_LENGTH.Min)
  @MaxLength(NAME_LENGTH.Max)
  public title: string;

  @IsString()
  @MinLength(DESCRIPTION_LENGTH.Min)
  @MaxLength(DESCRIPTION_LENGTH.Max)
  public description: string;

  @IsString()
  public picture: string;

  @IsIn(guitarTypes)
  public typeOfGuitar: GuitarType;

  @IsString()
  public postDate: string;

  @IsString()
  public article: string;

  @IsIn(numberOfStrings)
  @IsNumber()
  public numberOfStrings: number;

  @IsNumber()
  @Min(GUITAR_PRISE.Min)
  @Max(GUITAR_PRISE.Max)
  public price: number;
}
