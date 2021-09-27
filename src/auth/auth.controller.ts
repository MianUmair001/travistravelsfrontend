import {
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Body,
  Req,
  Param,
  UsePipes,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignUpDto } from './dto/signUp.dto';
import { VerifyEmailDto } from './dto/verifyEmail.dto';
import { ForgotPassDto } from './dto/forgotPass.dto';
import { ChangePasswordDto } from './dto/changePassword.dto';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { RolesDto } from './dto/roles.dto';
import { LoginAuthGuard } from './guards/login-auth.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';
import { ResendCodeDto } from './dto/resend-code.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtGuard } from './guards/jwt.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LoginAuthGuard)
  @Post('login')
  async login(@Request() req, @Body() body: LoginDto): Promise<any> {
    // return this.authService.login(req.user);
    return req.user;
  }

  @Post('signup/:role')
  async signup(@Body() body: SignUpDto, @Req() req, @Param() param: RolesDto) {
    return this.authService.signUp(body, param.role);
  }

  @Post('verifyEmail')
  async verifyEmail(@Body() body: VerifyEmailDto, @Req() req) {
    return this.authService.verifyEmail(body.email, body.code);
  }

  @Post('forgotPass')
  async forgotPassword(@Body() body: ForgotPassDto, @Req() req) {
    return this.authService.forgotPassword(body.email);
  }

  @Post('resetPass')
  async resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.resetPassword(body.email, body.password);
  }

  @Post('resendCode')
  async resendCode(@Body() body: ResendCodeDto) {
    return this.authService.resendCode(body.email, body.type);
  }

  @UseGuards(JwtGuard)
  @Post('changePass')
  async changePassword(@Body() body: ChangePasswordDto) {
    return this.authService.changePassword(
      body.email,
      body.password,
      body.newPassword,
    );
  }

  @UseGuards(JwtGuard)
  @Delete('deactivate')
  async deactivate(@Request() { user }) {
    return await this.authService.deactivate(user._id.toString());
  }

  @Post('test')
  async test(@Body() body) {
    // return this.authService.test(body.email);
    return 'Hello';
  }

  @Post('validateCode')
  async validateCode(@Body() { code, email }) {
    return this.authService.validateCode(code, email);
  }
}
