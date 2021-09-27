import { Allow, ArrayNotEmpty, IsArray, IsIn, IsNotEmpty, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from "class-transformer";
import { mimeTypesArray } from '../../global/types/mimeTypes';

export class FileDto {
  @IsString()
  @IsNotEmpty()
  fieldname: string;

  @IsString()
  @IsNotEmpty()
  originalname: string;

  @IsString()
  @IsNotEmpty()
  encoding: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(mimeTypesArray)
  mimetype: string;

  @IsNumber()
  size: number;

  @Allow()
  buffer: Buffer;
}

export class FilesDto {
  // @IsArray()
  // @ArrayNotEmpty()
  // @ValidateNested({
  //   each: true
  // }) @Type(() => FileDto)
  files: FileDto;

  constructor(data: FileDto) {
    if (data) {
      this.files = data
    }
  }
}