import {
  IsIn,
  IsNumber,
  IsOptional,
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

export class UpdateCardDto {
  @IsOptional()
  @IsString()
  @MinLength(NAME_LENGTH.Min)
  @MaxLength(NAME_LENGTH.Max)
  public title?: string;

  @IsOptional()
  @IsString()
  @MinLength(DESCRIPTION_LENGTH.Min)
  @MaxLength(DESCRIPTION_LENGTH.Max)
  public description?: string;

  @IsOptional()
  @IsString()
  public picture?: string;

  @IsOptional()
  @IsIn(guitarTypes)
  public typeOfGuitar?: GuitarType;

  @IsOptional()
  @IsString()
  public article?: string;

  @IsOptional()
  @IsIn(numberOfStrings)
  @IsNumber()
  public numberOfStrings?: number;

  @IsOptional()
  @IsNumber()
  @Min(GUITAR_PRISE.Min)
  @Max(GUITAR_PRISE.Max)
  public price?: number;
}
