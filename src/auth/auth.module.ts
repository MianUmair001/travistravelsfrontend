import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SendMail } from '../global/utils/sendMail.utils';
import { SecurityCodeUtils } from '../global/utils/securityCode.utils';
import { AuthHelper } from './helpers/auth.helper';
import { SessionSerializer } from './serializers/session.sereializer';
import { LocalStrategy } from './strategies/local.strategy';
import { SecurityCodeService } from './security-code/security-code.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '../config/config.module';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { ConfigService } from 'src/config/config.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.jwtSecret,
        signOptions: { expiresIn: '60d' },
      }),
      inject: [ConfigService],
    }),
    forwardRef(() => UsersModule),
    forwardRef(() => ConfigModule),
    PassportModule,
  ],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    AuthHelper,
    SecurityCodeUtils,
    SendMail,
    SecurityCodeService,
  ],
  controllers: [AuthController],
  exports: [JwtModule, AuthHelper],
})
export class AuthModule {}
