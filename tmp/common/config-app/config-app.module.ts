import { Module } from '@nestjs/common';
import dbConfig from './db.config';
import { ConfigModule } from '@nestjs/config';

const ENV_USERS_FILE_PATH = 'app/user/.user.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [dbConfig],
      envFilePath: ENV_USERS_FILE_PATH,
    }),
  ],
})
export class ConfigAppModule {}
