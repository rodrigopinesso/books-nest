import {
  ArgumentsHost,
  ExceptionFilter,
  HttpException as NestHttpException,
} from '@nestjs/common';
import { HttpException } from '../exceptions/http-exception';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export class GlobalExceptionFilter implements ExceptionFilter {
  catch(
    exception:
      | HttpException
      | Error
      | PrismaClientKnownRequestError
      | NestHttpException,
    host: ArgumentsHost,
  ) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof HttpException) {
      return response.status(exception.statusCode).json({
        statusCode: exception.statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message,
      });
    }

    if (exception instanceof PrismaClientKnownRequestError) {
      if (exception.code === 'P2002') {
        return response.status(409).json({
          statusCode: 409,
          timestamp: new Date().toISOString(),
          path: request.url,
          message: `${exception.meta.target} unique constraint failed`,
        });
      }
    }

    if (exception instanceof NestHttpException) {
      return response.status(exception.getStatus()).json({
        ...(exception.getResponse() as object),
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }

    response.status(500).json({
      statusCode: 500,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: 'Internal server error',
    });
  }
}
