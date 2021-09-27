import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { SecurityCodeTypeEnum } from '../../entities/security-code.entity';

export class ResendCodeDto {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email: string;  // may be email or userName

  @ApiProperty({example: Object.keys(SecurityCodeTypeEnum)})
  @IsString()
  @IsNotEmpty()
  @IsIn(Object.keys(SecurityCodeTypeEnum))
  type: string
}