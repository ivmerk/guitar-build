import { GuitarType } from './guitar-type.enum';

export type GuitarCard = {
  id?: string;
  name: string;
  description: string;
  data: Date;
  picture: string;
  typeOfGuitar: GuitarType;
  article: string;
  numberOfStrings: number;
  price: number;
};
