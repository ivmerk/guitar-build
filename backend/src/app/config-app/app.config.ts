import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';
import { DEFAULT_PORT } from '../../utils/common.constant';

export interface ApplicationConfig {
  environment?: string;
  port: number;
}

export default registerAs('application', (): ApplicationConfig => {
  const config: ApplicationConfig = {
    environment: process.env.NODE_ENV,
    port: parseInt(process.env.PORT || DEFAULT_PORT.toString(), 10),
  };

  const validationSchema = Joi.object<ApplicationConfig>({
    environment: Joi.string()
      .valid('development', 'production', 'stage')
      .required(),
    port: Joi.number().port().default(DEFAULT_PORT),
  });

  const { error } = validationSchema.validate(config, { abortEarly: true });

  if (error) {
    throw new Error(
      `[Application Config]: Environments validation failed. Please check .env file.
      Error message: Mongo.${error.message}`
    );
  }

  return config;
});
