import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import {
  IsEmail,
  IsNotEmpty,
  IsNumber, IsString, Length, Matches,
} from 'class-validator';

export class ChangePasswordDto {

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
    example: 'Usama@123'
  })
  @IsString()
  @Length(8, 64)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/)
  password: string;

  @ApiProperty({
    required: true,
    example: 'Usama@123'
  })
  @IsString()
  @Length(8, 64)
  @Matches(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/)
  newPassword: string;

  constructor(creds: {email: string, password: string, newPassword: string}) {
    this.email = creds?.email;
    this.password = creds?.password;
    this.newPassword = creds?.newPassword;
  }
}
