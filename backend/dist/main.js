import { __awaiter } from "tslib";
import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module.js';
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield NestFactory.create(AppModule);
        const config = new DocumentBuilder()
            .setTitle('The «Blog» service')
            .setDescription('Blog service API')
            .setVersion('1.0')
            .build();
        const globalPrefix = 'api';
        const document = SwaggerModule.createDocument(app, config);
        const port = process.env.PORT || 3333;
        app.setGlobalPrefix(globalPrefix);
        SwaggerModule.setup('spec', app, document);
        app.useGlobalPipes(new ValidationPipe({
            transform: true,
        }));
        yield app.listen(port);
        Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map