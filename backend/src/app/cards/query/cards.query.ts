import { IsIn, IsNumber, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_CARD_COUNT_LIMIT } from '../cards.constant';

export class CardsQuery {
  @Transform(({ value }) => +value || DEFAULT_CARD_COUNT_LIMIT)
  @IsNumber()
  @IsOptional()
  public limit = DEFAULT_CARD_COUNT_LIMIT;

  @IsIn(['byDate', 'byPrice'])
  @IsOptional()
  public sortType: 'byDate' | 'byPrice' | undefined;

  @Transform(({ value }) => +value)
  @IsOptional()
  public page: number;

  // @IsIn(['byDate', 'byPrice'])
  // @IsOptional()
  // public isAcoustic: 'yes' | undefined;

  // public isElectro: 'yes' | undefined;

  // public isUkulele: 'yes' | undefined;

  // public is4String: 'yes' | undefined;

  // public is6String: 'yes' | undefined;

  // public is7String: 'yes' | undefined;

  // public is12String: 'yes' | undefined;
}
