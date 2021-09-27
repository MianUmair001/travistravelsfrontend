import { ApiProperty, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { AttachmentDto } from '../../global/dto/attachments.dto';
import { CreateRoomDto } from '../room/dto/create-room.dto';

export class CreateHotelDto {

  @ApiProperty({ example: '5 star hotel located in Murree' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ValidateNested({ each: true })
  @Type(() => AttachmentDto)
  @IsNotEmpty()
  images: AttachmentDto[];

  @ApiProperty({ example: 'Sarena' })
  @IsNotEmpty()
  @IsString()
  name: string;

  // @ApiProperty({ example: RoomsDto })
  // @IsNotEmpty()
  // @Type(() => CreateRoomDto)
  // @ValidateNested({ each: true })
  // rooms: CreateRoomDto[];
}
