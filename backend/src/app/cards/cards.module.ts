import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CardsModel, CardsSchema } from './cards.model.js';
import { CardsController } from './cards.controller.js';
import { CardsService } from './cards.service.js';
import { CardsReposotory } from './cards.repository.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: CardsModel.name, schema: CardsSchema }]),
  ],
  controllers: [CardsController],
  providers: [CardsService, CardsReposotory],
})
export class CardsModule {}
