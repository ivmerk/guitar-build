import { AuthorizationStatus } from '../const';
import { store } from '../store/index.js';
import { GuitarCard } from './guitar-card.type';
import { GuitarType } from './guitar-type.enum';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  name: string;
};

export type CardData = {
  cards: GuitarCard[];
  selectedCard: GuitarCard | null;
  sameTypeCards: GuitarCard[];
  hasError: boolean;
  isCardsLoading: boolean;
};

export type CardProcess = {
  typeOfGuitar: GuitarType;
  numberOfStrings: number[];
  renderingCardsCount: number;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
