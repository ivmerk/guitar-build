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
    return await newCard.save();
  }

  public async findById(id: string): Promise<Card | null> {
    return await this.cardsModel.findById(id).exec();
  }

  public async find(): Promise<Card[] | null> {
    return await this.cardsModel.find().exec();
  }

  public async destroy(id: string): Promise<void> {
    console.log(await this.cardsModel.findByIdAndDelete(id).exec());
    await this.cardsModel.findByIdAndDelete(id).exec();
  }

  public async update(id: string, item: CardsEntity): Promise<Card | null> {
    return await this.cardsModel
      .findByIdAndUpdate(id, item.toObject(), { new: true })
      .exec();
  }
}
