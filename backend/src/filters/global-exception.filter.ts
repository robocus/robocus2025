import {
  ExceptionFilter,
  Catch,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { response } from 'express';
import { GraphQLError } from 'graphql';
import { QueryFailedError } from 'typeorm';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown) {
    let message = 'Internal server error';
    let status = 500;

    if (exception instanceof BadRequestException) {
      const response = exception.getResponse();
      message = response['message'][0];
      status = 400;
    } else if (exception instanceof HttpException) {
      message = exception.message;
      status = exception.getStatus();
    } else if (exception instanceof QueryFailedError) {
      if (exception.driverError.code === '23505') {
        message = 'Unique constraint violation';
        status = 409;
      } else if (exception.driverError.code === '22P02') {
        message = 'Invalid UUID';
        status = 400;
      } else {
        message = 'Query error';
        status = 500;
      }
    }

    return new GraphQLError(message, {
      extensions: {
        http: {
          status,
        },
      },
    });
  }
}
