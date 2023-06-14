import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { MongooseModule } from '@nestjs/mongoose';
import { getMongooseOptions } from '../utils/get-mongoose-options.js';
import { ConfigAppModule } from './config-app/config-app.module.js';
import { CardsModule } from './cards/cards.module.js';

@Module({
  imports: [
    MongooseModule.forRootAsync(getMongooseOptions()),
    UserModule,
    ConfigAppModule,
    CardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
