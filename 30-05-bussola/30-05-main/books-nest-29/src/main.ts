import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appMiddlewares } from './common/config/app-config';
import { swaggerConfig } from './common/config/swagger-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  appMiddlewares(app);
  swaggerConfig(app);

  await app.listen(3000);
}
bootstrap();
