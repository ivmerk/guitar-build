import { NameSpace } from '../../const';
import { GuitarCard } from '../../types/guitar-card.type';
import { State } from '../../types/state';

export const getCards = (state: State): GuitarCard[] =>
  state[NameSpace.Data].cards;
export const getIsCardsLoading = (state: State): boolean =>
  state[NameSpace.Data].isCardsLoading;
