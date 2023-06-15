// import { CardsRepositoryInterface } from '../app/cards/cards-repository.interface.js';
// import { CardsModel } from '../app/cards/cards.model.js';
// import { CardsReposotory } from '../app/cards/cards.repository.js';
// import { CardsService } from '../app/cards/cards.service.js';
// import { DatabaseInterface } from '../common/database-client/database.interface.js';
// import TSVFileReader from '../common/file-reader/tsv-file-reader.js';
// import { CRUDRepository } from '../types/crud-repository.interface.js';
// import { CliCommandInterface } from './cli-command.interface.js';

// export default class ImportCommand implements CliCommandInterface {
//   public readonly name = '--import';
//   private readonly cardsRepositiry: CardsRepositoryInterface;
//   private databaseService!: DatabaseInterface;

//   constructor(
//   ) {
//     this.onLine = this.onLine.bind(this);
//     this.onComplete = this.onComplete.bind(this);

//     this.cardsRepositiry = new CardsReposotory()
//   }
//   public execute(filename: string): void {
//     const fileReader = new TSVFileReader(filename.trim());

//     try {
//       fileReader.read();
//       console.log(fileReader.toArray());
//     } catch (err) {
//       if (!(err instanceof Error)) {
//         throw err;
//       }

//       console.log(
//         `Не удалось импортировать данные из файла по причине: «${err.message}»`
//       );
//     }
//   }
// }
