import got from 'got';
import { MockData } from '../types/mock-data.type.js';
import { CliCommandInterface } from './cli-command.interface.js';
import CardGenerator from '../common/card-generator/card-generator.js';
import { appendFile } from 'fs/promises';

export default class GenerateCommand implements CliCommandInterface {
  public readonly name = '--generate';
  private initialData!: MockData;

  public async execute(...parameters: string[]): Promise<void> {
    const [count, filepath, url] = parameters;
    const offerCount = Number.parseInt(count, 10);

    try {
      this.initialData = await got.get(url).json();
    } catch {
      return console.log(`Can't fetch data from ${url}.`);
    }
    const cardGeneratorString = new CardGenerator(this.initialData);

    for (let i = 0; i < offerCount; i++) {
      await appendFile(filepath, `${cardGeneratorString.generate()}\n`, 'utf8');
    }

    console.log(`File ${filepath} was created!`);
  }
}
