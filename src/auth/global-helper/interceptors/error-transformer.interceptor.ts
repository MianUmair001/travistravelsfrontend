import {
  BadGatewayException,
  CallHandler,
  ExecutionContext,
  HttpException, HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Request, Response } from 'express';

@Injectable()
export class ErrorTransformerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(
        catchError(err =>
          throwError(err),
        ),
      );
  }
}
