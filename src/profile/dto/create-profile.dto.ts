import { AddressEntity } from '../../entities/address.entity';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  isNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from '../../global/dto/address.dto';

export class CreateProfileDto {
  @ApiProperty({ type: AddressDto })
  @ValidateNested()
  @Type(() => AddressDto)
  address: AddressEntity;

  @ApiProperty({ example: 'Usama' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Akram' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: '09/23/2021' })
  @IsString()
  @IsNotEmpty()
  DateOfBirth: string;

  @ApiProperty({ example: '+923248482986' })
  @IsString()
  @IsOptional()
  phone: string;

  @ApiProperty({ example: 'usama' })
  @IsString()
  username: string;

  @ApiProperty({ example: 'user Id ' })
  @IsString()
  auth: string;
}
