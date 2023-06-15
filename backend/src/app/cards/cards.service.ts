import { Injectable, NotFoundException } from '@nestjs/common';
import { CardsReposotory } from './cards.repository.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { CardsEntity } from './cards.entity.js';
import { UpdateCardDto } from './dto/update-card.dto.js';
import { CARD_NOT_FOUND } from './cards.constant.js';

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

  public async getCards() {
    return await this.cardsRepository.find();
  }

  public async updateCard(id: string, dto: UpdateCardDto) {
    const oldCard = await this.cardsRepository.findById(id);
    if (oldCard) {
      const cardEntity = new CardsEntity({ ...oldCard, ...dto });
      return await this.cardsRepository.update(id, cardEntity);
    } else {
      throw new NotFoundException(CARD_NOT_FOUND);
    }
  }
}
