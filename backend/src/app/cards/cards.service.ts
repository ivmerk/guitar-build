import { Injectable } from '@nestjs/common';
import { CardsReposotory } from './cards.repository.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { CardsEntity } from './cards.entity.js';
// import { GuitarType } from '../../types/guitar-type.enum.js';

@Injectable()
export class CardsService {
  constructor(private readonly cardsRepository: CardsReposotory) {}

  public async post(dto: CreateCardDto) {
    const cardEntity = new CardsEntity({ ...dto });
    return await this.cardsRepository.create(cardEntity);
  }

  public async deleteCard(id: string): Promise<void> {
    await this.cardsRepository.destroy(id);
  }

  public async getCard(id: string) {
    return await this.cardsRepository.findById(id);
  }

  // public async getCards(
  //   {
  //     limit,
  //     sortType,
  //     page,
  //   }: { limit: number; sortType: string | undefined; page: number },
  //   {
  //     guitarType,
  //     numberOfStrings,
  //   }: { guitarType: GuitarType[]; numberOfStrings: number[] }
  // ) {}
  public async getCards() {
    return await this.cardsRepository.find();
  }
}
