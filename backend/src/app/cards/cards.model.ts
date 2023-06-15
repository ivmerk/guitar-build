import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Card } from '../../types/card.interface';
import { GuitarType } from '../../types/guitar-type.enum.js';

@Schema({
  collection: 'cards',
  timestamps: true,
})
export class CardsModel extends Document implements Card {
  @Prop({
    required: true,
  })
  public title!: string;

  @Prop({
    required: true,
  })
  public description!: string;

  @Prop({
    required: true,
  })
  public postDate!: Date;

  @Prop({
    required: true,
  })
  public picture!: string;

  @Prop({
    required: true,
  })
  public typeOfGuitar!: GuitarType;

  @Prop({
    required: true,
  })
  public article!: string;

  @Prop({
    required: true,
  })
  public numberOfStrings!: number;

  @Prop({
    required: true,
  })
  public price!: number;
}

export const CardsSchema = SchemaFactory.createForClass(CardsModel);
