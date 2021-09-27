import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { SignUpDto } from './dto/signUp.dto';
import { AuthHelper } from './helpers/auth.helper';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AuthEntity, AuthModel, UserRoleEnum } from '../entities/auth.entity';
import { SendMail } from '../global/utils/sendMail.utils';
import { SecurityCodeUtils } from '../global/utils/securityCode.utils';
import { CONSTANTS } from '../global/constants';
import { SecurityCodeTypeEnum } from 'src/entities/security-code.entity';
import { SecurityCodeService } from './security-code/security-code.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AuthEntity.name)
    private readonly authModel: AuthModel,
    private usersService: UsersService,
    private securityCodeService: SecurityCodeService,
    private readonly authHelper: AuthHelper,
    private readonly securityCode: SecurityCodeUtils,
    private readonly sendMail: SendMail,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.authModel.findOne({ email: email }).lean();
    if (user && this.authHelper.matchPassword(pass, user.password)) {
      if (!user.isActive) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      if (!user.isEmailVerified) {
        return { message: CONSTANTS.verifyEmailFirst };
      }
      const { password, ...result } = user;
      const payload = this.authHelper.createPayloadToSign(result);
      const access_token = this.authHelper.jwtify(payload);
      return {
        access_token,
        user: result,
      };
    }
    return null;
  }

  async create(data: AuthEntity): Promise<AuthEntity> {
    const created = (await this.authModel.create(data)).toObject();
    return await created;
  }

  async signUp(data: SignUpDto, role: UserRoleEnum): Promise<any> {
    try {
      const { password, email } = data;
      const exist = await this.authModel.findOne({ email }).lean();
      if (exist) {
        throw new HttpException(
          CONSTANTS.emailAlreadyExist,
          HttpStatus.FORBIDDEN,
        );
      }
      const hash = this.authHelper.hashPassword(
        password,
        CONSTANTS.passwordHashingRound,
      );
      const _user = await this.create({
        email,
        password: hash,
        role: role,
      });
      if (!_user) {
        throw new HttpException(
          CONSTANTS.emailAlreadyExist,
          HttpStatus.FORBIDDEN,
        );
      }
      const code = this.securityCode.generateCode();
      await this.securityCodeService.create({
        type: SecurityCodeTypeEnum.verification,
        email,
        code,
      });
      await this.sendMail.sendEMail(
        email,
        'Verification',
        `Your account verification code is ${code}`,
      );
      return { message: `Verification email sent to ${email}` };
      // return _user;
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async verifyEmail(email, code) {
    const user = await this.authModel.findUserByEmail(email);
    if (user.isEmailVerified) {
      throw new HttpException(
        CONSTANTS.alreadyVerified,
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const securityCode = await this.securityCodeService.findOne(
      email,
      code,
      SecurityCodeTypeEnum.verification,
    );
    if (!securityCode) {
      throw new HttpException(CONSTANTS.invalidCode, HttpStatus.NOT_ACCEPTABLE);
    }

    const userProfile = {
      email: email,
      user: user._id.toString(),
    };
    const verifiedEmail = await this.authModel
      .findByIdAndUpdate(
        user._id,
        {
          isEmailVerified: true,
        },
        {
          new: true,
        },
      )
      .lean();
    if (verifiedEmail.isEmailVerified) {
      await this.securityCodeService.findByEmailAndTypeAndUpdate(
        email,
        SecurityCodeTypeEnum.verification,
        code,
      );
    }
    const { password, ...rest } = verifiedEmail;
    const payload = this.authHelper.createPayloadToSign(verifiedEmail);
    const access_token = this.authHelper.jwtify(payload);
    return {
      access_token,
      user: rest,
    };
  }

  async forgotPassword(email: string) {
    try {
      const user = await this.authModel.findUserByEmail(email);
      if (!user) {
        throw new HttpException(
          CONSTANTS.userNotFound,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      const code = this.securityCode.generateCode();
      await this.securityCodeService.create({
        type: SecurityCodeTypeEnum.forgot,
        email,
        code,
      });
      await this.sendMail.sendEMail(
        email,
        SecurityCodeTypeEnum.forgot.toUpperCase(),
        `Your password ${SecurityCodeTypeEnum.forgot} code is ${code}`,
      );
      return { message: `Forgot password code is sent to your email ${email}` };
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async resetPassword(email: string, newPassword: string) {
    try {
      const user = await this.authModel.findUserByEmail(email);
      if (!user) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
      const hash = this.authHelper.hashPassword(
        newPassword,
        CONSTANTS.passwordHashingRound,
      );
      const updated = await this.authModel
        .findByIdAndUpdate(
          user._id.toString(),
          {
            password: hash,
          },
          {
            new: true,
          },
        )
        .lean();
      const { password, ...rest } = updated;
      const payload = this.authHelper.createPayloadToSign(updated);
      const access_token = this.authHelper.jwtify(payload);
      return {
        access_token,
        user: rest,
      };
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async resendCode(email: string, type: string) {
    const user = await this.authModel.findUserByEmail(email);
    const securityCodeType = SecurityCodeTypeEnum[type.toLowerCase()];
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    if (
      securityCodeType === SecurityCodeTypeEnum.verification &&
      user.isEmailVerified
    ) {
      throw new HttpException(
        'Email Already Verified',
        HttpStatus.NOT_ACCEPTABLE,
      );
    }
    const code = this.securityCode.generateCode();
    await this.securityCodeService.findByEmailAndTypeAndUpdate(
      user.email,
      securityCodeType,
      code,
    );
    await this.sendMail.sendEMail(
      email,
      type.toUpperCase(),
      `Your password ${type} code is ${code}`,
    );

    return;
  }

  async changePassword(email: string, password: string, newPassword: string) {
    try {
      const user = await this.authModel.findUserByEmail(email);
      if (!this.authHelper.matchPassword(password, user.password)) {
        throw new HttpException(
          CONSTANTS.incorrectEmailOrPassword,
          HttpStatus.UNPROCESSABLE_ENTITY,
        );
      }
      const hash = this.authHelper.hashPassword(
        newPassword,
        CONSTANTS.passwordHashingRound,
      );
      const updatedUser = await this.authModel
        .findOneAndUpdate(
          user._id.toString(),
          {
            password: hash,
          },
          {
            new: true,
          },
        )
        .lean();
      delete updatedUser.password;
      return updatedUser;
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deactivate(userId) {
    try {
      const user = await this.authModel
        .findOneAndUpdate(userId, { isActive: false })
        .lean();
      if (!user) {
        throw new HttpException(CONSTANTS.userNotFound, HttpStatus.NOT_FOUND);
      }
    } catch (e) {
      throw new HttpException(
        e.message || CONSTANTS.somethingWentWrong,
        e.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async test(email) {
    try {
      return this.authModel.findUserByEmail(email);
    } catch (e) {}
  }

  async validateCode(code: string, email: string) {
    const securityCode = await this.securityCodeService.findOne(
      email,
      code,
      SecurityCodeTypeEnum.forgot,
    );
    if (!securityCode) {
      throw new HttpException(CONSTANTS.invalidCode, HttpStatus.NOT_ACCEPTABLE);
    }
  }
}
