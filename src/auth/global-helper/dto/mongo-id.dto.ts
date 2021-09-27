import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class MongoIdDto {
  @ApiProperty({ example: '602b9b86ef1644f7e1187d70' })
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  id: string;
}