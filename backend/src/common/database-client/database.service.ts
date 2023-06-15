import mongoose from 'mongoose';
import { DatabaseInterface } from './database.interface.js';

export default class DatabaseService implements DatabaseInterface {
  constructor() {}

  public async connect(uri: string): Promise<void> {
    await mongoose.connect(uri);
  }

  public async disconnect(): Promise<void> {
    await mongoose.disconnect();
  }
}
