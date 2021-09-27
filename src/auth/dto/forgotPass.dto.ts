import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber, IsString,
} from 'class-validator';

export class ForgotPassDto {

  @ApiProperty({
    required: true,
    type: String,
    description: 'email',
    example: "usamaakramcp@gmail.com"
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  constructor(creds: {email: string}) {
    this.email = creds?.email;
  }
}
