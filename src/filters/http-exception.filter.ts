import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { ERROR_MESSAGES } from '../helpers/errors/error.messages';
  
  @Catch()
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
  
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      const errorResponse = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message:
          status === HttpStatus.INTERNAL_SERVER_ERROR
            ? ERROR_MESSAGES.SERVER_ERROR
            : exception.message || ERROR_MESSAGES.INVALID_REQUEST,
      };
  
      response.status(status).json(errorResponse);
    }
  }
  