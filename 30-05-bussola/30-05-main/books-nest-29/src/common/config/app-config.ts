import { INestApplication, ValidationPipe } from '@nestjs/common';
import { GlobalExceptionFilter } from '../filters/http-exception.filter';

export const appMiddlewares = (app: INestApplication<any>) => {
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      whitelist: true,
    }),
  );

  app.useGlobalFilters(new GlobalExceptionFilter());
};
