import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '../../config/config.service';
import { CONSTANTS } from '../../global/constants';

export type ResetPasswordToken = {
  userId: string;
  code: string;
};

@Injectable()
export class AuthHelper {
  constructor(
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  hashPassword(pass: string, rounds = CONSTANTS.passwordHashingRound) {
    return bcrypt.hashSync(pass, rounds);
  }

  matchPassword(pass: string, hash: string, round = 10) {
    return bcrypt.compareSync(pass, hash);
  }
  createPayloadToSign(payload) {
    try {
      const errorMessage = 'is required to create jwt-payload';
      if (!payload._id) {
        throw new HttpException(
          `_id ${errorMessage}`,
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
      if (!payload.email) {
        throw new HttpException(
          `email ${errorMessage}`,
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
      if (!payload.role) {
        throw new HttpException(
          `role ${errorMessage}`,
          HttpStatus.NOT_ACCEPTABLE,
        );
      }
      return { _id: payload._id, email: payload.email, role: payload.role };
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  jwtify(payload) {
    return this.jwtService.sign(payload);
  }
}
