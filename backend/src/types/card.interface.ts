import { GuitarType } from './guitar-type.enum';

export interface Card {
  _id?: string;
  title: string;
  description: string;
  postDate: Date;
  picture: string;
  typeOfGuitar: GuitarType;
  article: string;
  numberOfStrings: number;
  price: number;
}
