import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber, IsString,
} from 'class-validator';

export class VerifyEmailDto {

  @ApiProperty({
    required: true,
    type: String,
    description: 'email',
    example: "usamaakramcp@gmail.com"
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    required: true,
    example: '1234'
  })
  @IsNumber()
  code: number;

  constructor(creds: {email: string; code: number}) {
    this.email = creds?.email;
    this.code = creds?.code;
  }
}
