import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt } from 'passport-jwt';
// import { AuthHelper } from '../auth/helpers/auth.helper';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { AuthHelper } from '../helpers/auth.helper';
import { UserRoleEnum } from 'src/entities/auth.entity';

@Injectable()
export class AdminJwtGuard extends AuthGuard('jwt') {
  constructor(
    private readonly authHelper: AuthHelper,
    private readonly jwtService: JwtService,
  ) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    try {
      const req = context.switchToHttp().getRequest();
      const token: string = ExtractJwt.fromAuthHeaderAsBearerToken()(req);
      if (!token) {
        throw new Error('Invalid token');
      }
      if (!this.jwtService) {
        throw new HttpException(
          'jwt Service not found',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const payload = await this.jwtService.verify(token);
      // const isBlackListed = await this.authHelper.isTokenBlackListed(token);
      if (payload?.role[0] === UserRoleEnum.admin) {
        req.user = payload;
        return payload && req.user;
      } else {
        return false;
      }
    } catch (e) {
      throw new UnauthorizedException({
        message: e.message,
      });
    }
  }
}
