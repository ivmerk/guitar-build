import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CardsService } from './cards.service.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { fillObject } from '../../utils/common.js';
import { CardRdo } from './rdo/card.rdo.js';
import { MongoidValidationPipe } from '../../utils/mongoid-validation.pipe.js';
import { UpdateCardDto } from './dto/update-card.dto.js';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post('/')
  public async create(@Body() dto: CreateCardDto) {
    const newCard = await this.cardsService.post(dto);
    return fillObject(CardRdo, newCard);
  }

  @Get('/:id')
  public async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.cardsService.getCard(id);
    return fillObject(CardRdo, existUser);
  }

  @Patch('/:id')
  public async update(
    @Param('id', MongoidValidationPipe) id: string,
    @Body() dto: UpdateCardDto
  ) {
    const updatedPost = await this.cardsService.updateCard(id, dto);
    return fillObject(CardRdo, updatedPost);
  }

  @Get('/')
  public async index() {
    const cards = await this.cardsService.getCards();
    return fillObject(CardRdo, cards);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id', MongoidValidationPipe) id: string) {
    this.cardsService.deleteCard(id);
  }
}
