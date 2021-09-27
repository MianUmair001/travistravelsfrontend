import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';
import { validate } from 'class-validator';
import { LoginDto } from '../dto/login.dto';
// import { LoginDto } from '../auth/dto/login.dto';

@Injectable()
export class LoginAuthGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const credentials = new LoginDto(req.body);
    if (credentials && credentials.email) {
      credentials.email = credentials.email.toLowerCase();
    }
    const errors = await validate(credentials);
    if (errors.length) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        message: errors,
      });
    }
    context.switchToHttp().getRequest().body.email = context
      .switchToHttp()
      .getRequest()
      .body.email.toLowerCase();
    const result: boolean = (await super.canActivate(context)) as boolean;
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    return result;
  }
}
