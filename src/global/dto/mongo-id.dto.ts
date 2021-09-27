import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class MongoIdDto {
  @ApiProperty({ example: '6022d08433ca7b26fcd7405b' })
  @IsMongoId()
  @IsNotEmpty()
  @IsString()
  id: string;

  constructor(creds: { id: string }) {
    this.id = creds?.id;
  }
}
