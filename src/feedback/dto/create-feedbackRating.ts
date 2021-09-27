import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AttachmentDto } from 'src/global/dto/attachments.dto';

export class CreateFeedbackRatingDto {
  @ApiProperty({
    example:
      'Type of FeedBack as there are four feedback,rating,suggestion,review',
  })
  @IsString()
  @IsNotEmpty()
  type: string;

  @ApiProperty({ example: 'Rating between 1 to 5' })
  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @ApiProperty({ example: 'Text for the Feedback' })
  @IsString()
  @IsNotEmpty()
  text: string;

  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  @IsNotEmpty()
  images: AttachmentDto[];
}
