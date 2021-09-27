import { AuthService } from '../auth.service';
import { HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({usernameField: 'email', passwordField: 'password'});
  }

  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      // throw new UnauthorizedException();
      throw new HttpException('Incorrect username or password', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }
} 