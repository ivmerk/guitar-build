import { MongooseModuleAsyncOptions } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getMongoConnectionString } from './db.js';

export function getMongooseOptions(): MongooseModuleAsyncOptions {
  // const useFactory1 = async (config: ConfigService) => {
  //   return {
  //     uri: getMongoConnectionString({
  //       username: config.get<string>('db.user'),
  //       password: config.get<string>('db.password'),
  //       host: config.get<string>('db.host'),
  //       port: config.get<string>('db.port'),
  //       authDatabase: config.get<string>('db.authBase'),
  //       databaseName: config.get<string>('db.name'),
  //     }),
  //   };
  // };
  // console.log(await useFactory1);
  return {
    imports: [ConfigModule],
    useFactory: async (config: ConfigService) => {
      return {
        uri: getMongoConnectionString({
          username: config.get<string>('db.user'),
          password: config.get<string>('db.password'),
          host: config.get<string>('db.host'),
          port: config.get<string>('db.port'),
          authDatabase: config.get<string>('db.authBase'),
          databaseName: config.get<string>('db.name'),
        }),
      };
    },
    inject: [ConfigService],
  };
}
