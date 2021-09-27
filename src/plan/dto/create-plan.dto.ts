import { PlanEntity } from '../../entities/plan.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlanDto {

  @ApiProperty({ example: 'Basic Plan for everyone' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'Basic' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  rooms: number;

}