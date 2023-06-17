import { GuitarType } from './guitar-type.enum';

export type CardData = {
  title: string;
  description: string;
  picture: string;
  typeOfGuitar: GuitarType;
  postDate: string;
  article: string;
  numberOfStrings: number;
  price: number;
};
