import {
  IsBoolean,
  IsBooleanString,
  IsOptional,
  IsString,
} from 'class-validator';

export class UploadBodyDto {
  @IsOptional()
  @IsBooleanString()
  isProfilePic: boolean;

  @IsOptional()
  @IsBooleanString()
  isPlaceImage: boolean;

  @IsOptional()
  @IsBooleanString()
  isHotelImage: boolean;

  @IsOptional()
  @IsBooleanString()
  isRoomImage: boolean;
}
