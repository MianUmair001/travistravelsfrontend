import { IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty({ example: 'kfc', description: 'address Name' })
  @IsString()
  @IsNotEmpty()
  addressName: string;


  @ApiPropertyOptional({ example: 'Arab Emirates' })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiPropertyOptional({ example: 'street 29/3' })
  @IsOptional()
  @IsString()
  streetAddress?: string;


  @ApiProperty({ example: '31.473186, 74.2650702' })
  @IsString()
  @Matches(/-?[1-9][0-9]*(\.[0-9]+)?,\s*-?[1-9][0-9]*(\.[0-9]+)?/)
  coordinates: string | any[];
}
