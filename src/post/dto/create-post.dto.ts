import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  isString,
  IsString,
  ValidateNested,
} from 'class-validator';
import { string } from 'joi';
import { AddressEntity } from 'src/entities/address.entity';
import { AttachmentsEntity } from 'src/entities/attachment.entity';
import { AttachmentDto } from 'src/global/dto/attachments.dto';

export class CreatePostDto {
  @ApiProperty({ example: 'Text of the Post' })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiPropertyOptional({ example: 'Mentions In the Post' })
  @IsArray()
  @Type(() => IsString())
  @IsNotEmpty()
  mentions: string[];

  @ApiPropertyOptional({ example: 'Tags of the Post' })
  @IsString()
  @IsNotEmpty()
  tagged: string[];

  @ApiPropertyOptional({ example: 'HashTags in the Post' })
  @IsString()
  @IsNotEmpty()
  hashTags: string[];

  @ApiPropertyOptional({ example: 'Images Attached In the Post' })
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  @IsNotEmpty()
  images?: AttachmentsEntity[];

  @ApiProperty({ example: 'User Name of the Person creating post' })
  @IsString()
  @IsNotEmpty()
  createdBy: string;

  @ApiProperty({ example: 'Address in the Post' })
  @Type(() => AddressEntity)
  @IsNotEmpty()
  location: AddressEntity;
}
