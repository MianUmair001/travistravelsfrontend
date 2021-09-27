import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  text: string;

  @ApiPropertyOptional()
  @IsString()
  parentId?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  postId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  createdBy: string;
}
