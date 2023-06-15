import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CardsService } from './cards.service.js';
import { CreateCardDto } from './dto/create-card.dto.js';
import { fillObject } from '../../utils/common.js';
import { CardRdo } from './rdo/card.rdo.js';
import { MongoidValidationPipe } from '../../utils/mongoid-validation.pipe.js';
import { UpdateCardDto } from './dto/update-card.dto.js';
import { JwtAuthGuard } from '../user/guards/jwt-auth.guard.js';
import { RequestWithTokenPayload } from '../../types/request-with-token-payload.js';
import { ADMIN_NAME } from '../../utils/common.constant.js';
import { NEED_ADMIN_RIGTHS } from './cards.constant.js';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/')
  public async create(
    @Body() dto: CreateCardDto,
    @Req() { user: payload }: RequestWithTokenPayload
  ) {
    if (payload?.name === ADMIN_NAME) {
      const newCard = await this.cardsService.post(dto);
      return fillObject(CardRdo, newCard);
    } else {
      throw new NotFoundException(NEED_ADMIN_RIGTHS);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  public async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.cardsService.getCard(id);
    return fillObject(CardRdo, existUser);
  }

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('id', MongoidValidationPipe) id: string) {
    this.cardsService.deleteCard(id);
  }
}
