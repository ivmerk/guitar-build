import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem } from '../../utils/random.js';
import { CardGeneratorInterface } from './card-generator.interface.js';
import dayjs from 'dayjs';

const MIN_PRICE = 100;
const MAX_PRICE = 1000000;
const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;
export default class CardGenerator implements CardGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const picture = getRandomItem<string>(this.mockData.pictures);
    const typeOfGuitar = getRandomItem<string>(this.mockData.typesOfGuitar);
    const article = getRandomItem<string>(this.mockData.articles);
    const numberOfStrings = getRandomItem<string>(this.mockData.typesOfGuitar);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const postDate = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();
    return [
      title,
      description,
      postDate,
      picture,
      typeOfGuitar,
      article,
      numberOfStrings,
      price,
    ].join('\t');
  }
}
