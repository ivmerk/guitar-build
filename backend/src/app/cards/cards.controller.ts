import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  // Query,
} from '@nestjs/common';
import { CardsService } from './cards.service.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { fillObject } from '../../utils/common.js';
import { CardRdo } from './rdo/card.rdo.js';
import { MongoidValidationPipe } from '../../utils/mongoid-validation.pipe.js';
// import { CardsQuery } from './query/cards.query.js';
// import { FiltersDto } from './dto/filters.dto.js';

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

  // @Get('/')
  // public async index(@Query() query: CardsQuery, @Body() filter: FiltersDto) {
  //   const cards = await this.cardsService.getCards(query, filter);
  //   return fillObject(CardRdo, cards);
  // }

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
