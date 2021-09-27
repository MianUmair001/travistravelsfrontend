import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateLikeDislikeDto {
  @ApiProperty({ example: 'True False' })
  @IsBoolean()
  @IsNotEmpty()
  liked: Boolean;

  @ApiPropertyOptional({ example: 'True False' })
  @IsBoolean()
  @IsNotEmpty()
  disliked: Boolean;

  @ApiProperty({ example: 'User Id' })
  @IsString()
  @IsNotEmpty()
  userId: string;

  @ApiProperty({ example: 'Post Id' })
  @IsString()
  @IsNotEmpty()
  postId: string;
}
