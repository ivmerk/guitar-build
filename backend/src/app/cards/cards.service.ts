import { Injectable, NotFoundException } from '@nestjs/common';
import { CardsReposotory } from './cards.repository.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { CardsEntity } from './cards.entity.js';
import { UpdateCardDto } from './dto/update-card.dto.js';
import { CARD_NOT_FOUND } from './cards.constant.js';
import { CardsServiceInterface } from './cards-service.intarface.js';
import { Card } from '../../types/card.interface.js';

@Injectable()
export class CardsService implements CardsServiceInterface {
  constructor(private readonly cardsRepository: CardsReposotory) {}

  public async post(dto: CreateCardDto): Promise<Card> {
    const postDate = new Date(dto.postDate);
    const cardEntity = new CardsEntity({ ...dto, postDate });
    return await this.cardsRepository.create(cardEntity);
  }

  public async deleteCard(id: string): Promise<void> {
    await this.cardsRepository.destroy(id);
  }

  public async getCard(id: string): Promise<Card | null> {
    return await this.cardsRepository.findById(id);
  }

  public async getCards(): Promise<Card[] | null> {
    return await this.cardsRepository.find();
  }

  public async updateCard(
    id: string,
    dto: UpdateCardDto
  ): Promise<Card | null> {
    const oldCard = await this.cardsRepository.findById(id);
    if (oldCard) {
      const cardEntity = new CardsEntity({ ...oldCard, ...dto });
      return await this.cardsRepository.update(id, cardEntity);
    } else {
      throw new NotFoundException(CARD_NOT_FOUND);
    }
  }
}
