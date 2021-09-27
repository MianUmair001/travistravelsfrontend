import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { AttachmentDto } from '../../../global/dto/attachments.dto';

export class CreateRoomDto {
  @Type(() => AttachmentDto)
  @ValidateNested({ each: true })
  @IsNotEmpty()
  images: AttachmentDto[];

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  @IsNumber()
  noOfBathroom: number;

  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  @IsNumber()
  noOfBeds: number;

  @ApiProperty({
    example: 'id of the basic plan or any other you are adding this room in',
  })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    example:
      'name of the selected plan or any other you are adding this room in',
  })
  @IsNotEmpty()
  @IsString()
  planName: string;

  @ApiProperty({ example: 'Hotel Id' })
  @IsNotEmpty()
  @IsString()
  hotel: string;
}
