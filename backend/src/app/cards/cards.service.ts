import { Injectable } from '@nestjs/common';
import { CardsReposotory } from './cards.repository.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { CardsEntity } from './cards.entity.js';

@Injectable()
export class CardsService {
  constructor(private readonly cardsRepository: CardsReposotory) {}

  public async post(dto: CreateCardDto) {
    const cardEntity = new CardsEntity({ ...dto });
    return await this.cardsRepository.create(cardEntity);
  }
}
