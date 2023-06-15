import { readFileSync } from 'fs';
import { FileReaderInterface } from './file-reader.interface.js';
import { Card } from '../../types/card.interface.js';
import { GuitarTypeEnum } from '../../types/guitar-type.enum.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Card[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(
        ([
          title,
          description,
          postDate,
          picture,
          typeOfGuitar,
          article,
          numberOfStrings,
          price,
        ]) => ({
          title,
          description,
          postDate: new Date(postDate),
          picture,
          typeOfGuitar:
            GuitarTypeEnum[typeOfGuitar as 'Electro' | 'Accustic' | 'Ukulele'],
          article,
          numberOfStrings: Number.parseInt(numberOfStrings, 10),
          price: Number.parseInt(price, 10),
        })
      );
  }
}
