import { IsIn, IsNotEmpty } from 'class-validator';
import { UserRoleEnum } from '../../entities/auth.entity';
import { ApiProperty } from '@nestjs/swagger';

export class RolesDto {
  @ApiProperty({enum: UserRoleEnum, default: UserRoleEnum.user})
  @IsIn(Object.keys(UserRoleEnum))
  role: UserRoleEnum;
}