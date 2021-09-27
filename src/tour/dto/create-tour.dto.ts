import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AttachmentDto } from 'src/global/dto/attachments.dto';
import { CreatePlacesDto } from 'src/places/dto/create-places.dto';

export class CreateTourDto {
  @ApiProperty({ example: 'Name of Tour' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Description' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Tour Type' })
  @IsString()
  @IsNotEmpty()
  tourType: string;

  @ApiProperty({ example: 'Start Location' })
  @IsString()
  @IsNotEmpty()
  startLocation: string;

  @ApiProperty({ example: 'End Location' })
  @IsString()
  @IsNotEmpty()
  endLocation: string;

  @ApiProperty({ example: 'Price' })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'Start Data' })
  @IsString()
  @IsNotEmpty()
  startDate: string;

  @ApiProperty({ example: 'End Date' })
  @IsString()
  @IsNotEmpty()
  endDate: string;

  @ApiProperty({ example: 'Status' })
  @IsString()
  @IsNotEmpty()
  status: string;

  @ApiProperty({ example: 'Places Included In the Tour' })
  @ValidateNested({ each: true })
  @Type(() => CreatePlacesDto)
  @IsNotEmpty()
  places: CreatePlacesDto[];
}
