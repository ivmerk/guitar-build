import { Card } from '../../types/card.interface';
import { GuitarType } from '../../types/guitar-type.enum';

export class CardsEntity implements Card {
  _id?: string;
  title: string;
  description: string;
  postDate: Date;
  picture: string;
  typeOfGuitar: GuitarType;
  article: string;
  numberOfStrings: number;
  price: number;

  constructor(card: Card) {
    this._id = card._id;
    this.title = card.title;
    this.description = card.description;
    this.postDate = card.postDate;
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
