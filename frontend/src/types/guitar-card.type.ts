import { GuitarType } from './guitar-type.enum';

export type GuitarCard = {
  id?: string;
  title: string;
  description: string;
  postDate: Date;
  picture: string;
  typeOfGuitar: GuitarType;
  article: string;
  numberOfStrings: number;
  price: number;
};
