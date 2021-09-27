import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsEmail,
  IsIn,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches
} from "class-validator";

export class LoginDto {

  @ApiProperty({
    required: true,
    type: String,
    description: 'email',
    example: "usamaakramcp@gmail.com"
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
    example: 'Usama@123'
  })
  @IsString()
  @Length(8, 64)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/)
  password: string;

  constructor(creds: {email: string; password: string}) {
    this.password = creds?.password;
    this.email = creds?.email;
  }
}
