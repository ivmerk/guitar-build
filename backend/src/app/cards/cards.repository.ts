import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '../../types/crud-repository.interface';
import { CardsEntity } from './cards.entity';
import { Card } from '../../types/card.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CardsModel } from './cards.model.js';
import { Model } from 'mongoose';

@Injectable()
export class CardsReposotory
  implements CRUDRepository<CardsEntity, string, Card>
{
  constructor(
    @InjectModel(CardsModel.name)
    private readonly cardsModel: Model<CardsModel>
  ) {}

  public async create(item: CardsEntity): Promise<Card> {
    const newCard = new this.cardsModel(item);
    return newCard.save();
  }

  public async findById(id: string): Promise<Card | null> {
    return this.cardsModel.findById(id).populate(['userId']).exec();
  }
}
