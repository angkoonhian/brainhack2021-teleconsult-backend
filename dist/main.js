"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const path_1 = require("path");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    const port = process.env.PORT || 3000;
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Brainhack backend services TELE CONSULT')
        .setDescription('API for TELE CONSULT services')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.setBaseViewsDir(path_1.join(__dirname, '../../../', 'views'));
    app.setViewEngine('hbs');
    await app.listen(port, () => {
        common_1.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map