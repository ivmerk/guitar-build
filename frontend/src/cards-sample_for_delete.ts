import { GuitarCard } from './types/guitar-card.type';
import { GuitarType } from './types/guitar-type.enum';

export const guitarCard: GuitarCard = {
  name: 'Gibson',
  description: 'Gibson description',
  data: new Date(),
  picture: 'picture.png',
  typeOfGuitar: GuitarType.Acoustic,
  article: '322223',
  numberOfStrings: 5,
  price: 99.99,
};

export const guitarCards = [
  guitarCard,
  guitarCard,
  guitarCard,
  guitarCard,
  guitarCard,
];
