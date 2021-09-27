import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { AttachmentDto } from 'src/global/dto/attachments.dto';

export class CreatePlacesDto {
  @ApiProperty({ example: 'Naran Kaghan' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'The Beautiful Place to Visit' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 'Images of the Beautiful Place to Visit' })
  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  @IsNotEmpty()
  images: AttachmentDto[];
}
