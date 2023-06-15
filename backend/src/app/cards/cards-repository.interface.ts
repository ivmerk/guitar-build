import { Card } from '../../types/card.interface';
import { CardsEntity } from './cards.entity';

export interface CardsRepositoryInterface {
  create(item: CardsEntity): Promise<Card>;
  findById(id: string): Promise<Card | null>;
  destroy(id: string): Promise<void>;
  update(id: string, item: CardsEntity): Promise<Card | null>;
}
