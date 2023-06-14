import { Body, Controller, Post } from '@nestjs/common';
import { CardsService } from './cards.service.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { fillObject } from '../../utils/common.js';
import { CardRdo } from './rdo/card.rdo.js';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post('/')
  public async create(@Body() dto: CreateCardDto) {
    const newCard = await this.cardsService.post(dto);
    return fillObject(CardRdo, newCard);
  }
}
