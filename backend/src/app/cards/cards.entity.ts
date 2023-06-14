import { Card } from '../../types/card.interface';
import { GuitarType } from '../../types/guitar-type.enum';

export class CardsEntity implements Card {
  _id?: string;
  name: string;
  description: string;
  data: Date;
  picture: string;
  typeOfGuitar: GuitarType;
  article: string;
  numberOfStrings: number;
  price: number;

  constructor(card: Card) {
    this._id = card._id;
    this.name = card.name;
    this.description = card.description;
    this.data = new Date();
    this.picture = card.picture;
    this.typeOfGuitar = card.typeOfGuitar;
    this.article = card.article;
    this.numberOfStrings = card.numberOfStrings;
    this.price = card.price;
  }

  public toObject() {
    return { ...this };
  }
}
