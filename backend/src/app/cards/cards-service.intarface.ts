import { Card } from '../../types/card.interface';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

export interface CardsServiceInterface {
  post(dto: CreateCardDto): Promise<Card>;
  deleteCard(id: string): Promise<void>;
  getCard(id: string): Promise<Card | null>;
  getCards(): Promise<Card[] | null>;
  updateCard(id: string, dto: UpdateCardDto): Promise<Card | null>;
}
