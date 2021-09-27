import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  Allow,
  IsBoolean,
  IsIn,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { mimeTypesArray } from '../types/mimeTypes';
import { BucketFolder } from '../types/awsHelper';
import { Type } from 'class-transformer';

export class AttachmentDto {
  @ApiProperty({
    required: true,
    type: String,
    description: 'type',
    example: Object.values(mimeTypesArray),
  })
  @IsIn(mimeTypesArray)
  type: string;

  @ApiProperty({
    description: 'name',
    example: 'id-photo',
  })
  @IsNotEmpty()
  name: string; // name of file

  @ApiProperty({
    required: true,
    type: String,
    description: 'folderName to upload in',
    example: Object.keys(BucketFolder),
  })
  @IsNotEmpty()
  @IsIn(Object.keys(BucketFolder))
  folderName: string;

  @ApiProperty({
    required: true,
    type: String,
    description: 'url of file',
    example: './MontyExchangeUploads/kycProofs',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'size of the file',
    example: '531026',
  })
  @IsNotEmpty()
  @IsNumber()
  size: number;

  @ApiProperty({
    required: true,
    type: Number,
    description: 'encoding of the file',
    example: '7bit',
  })
  @IsNotEmpty()
  @IsString()
  encoding: string;

  @IsBoolean()
  @IsOptional()
  isTemp: boolean;
}
