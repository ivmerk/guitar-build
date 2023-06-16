import { __awaiter } from "tslib";
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module.js';
import { ConfigService } from '@nestjs/config';
import { DEFAULT_PORT } from './utils/common.constant.js';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield NestFactory.create(AppModule);
        const config = new DocumentBuilder()
            .setTitle('The «Blog» service')
            .setDescription('Blog service API')
            .setVersion('1.0')
            .build();
        const globalPrefix = 'api';
        const configService = app.get(ConfigService);
        const document = SwaggerModule.createDocument(app, config);
        const port = process.env.PORT || DEFAULT_PORT;
        app.enableCors({
            origin: [
                'http://localhost:3001',
                'http://localhost:3000',
                'http://example.com',
                'http://www.example.com',
                'http://app.example.com',
                'https://example.com',
                'https://www.example.com',
                'https://app.example.com',
            ],
            methods: ['GET', 'POST'],
            credentials: true,
        });
        app.setGlobalPrefix(globalPrefix);
        SwaggerModule.setup('spec', app, document);
        app.useGlobalPipes(new ValidationPipe({
            transform: true,
        }));
        yield app.listen(port);
        Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
        Logger.log(`🎯  Current mode: ${configService.get('application.environment')}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map