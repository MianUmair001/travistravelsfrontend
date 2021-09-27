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
// import { UserRoleEnum } from '../entities/auth.entity';
import { CONSTANTS } from 'src/global/constants';
import { UserRoleEnum } from 'src/entities/auth.entity';
import { AuthHelper } from '../helpers/auth.helper';
// import { CONSTANTS } from '../global-helper/constants';

@Injectable()
export class UserAuthGuard extends AuthGuard('jwt') {
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
      req.user = payload;
      if (req.user.role !== UserRoleEnum.user) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      return payload && req.user;
    } catch (e) {
      throw new UnauthorizedException({
        message: e.message,
      });
    }
  }
}
