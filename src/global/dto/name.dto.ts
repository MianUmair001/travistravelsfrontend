import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class NameDto {
  @ApiProperty({ example: 'Basic' })
  @IsString()
  @IsNotEmpty()
  name: string;
}