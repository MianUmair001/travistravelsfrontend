import {
  BadRequestException,
  Body,
  Controller,
  HttpStatus,
  Post,
  Req,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { diskStorage } from 'multer';
import { validate } from 'class-validator';
import { FilesDto } from './dto/file.dto';
import { UploadBodyDto } from './dto/upload-body.dto';
import { UploadService } from './upload.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Upload')
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor([{ name: 'file', maxCount: 10 }], {
      storage: diskStorage({
        destination: (req, file, cb) => {
          console.log(req.body);
          let fieldName = 'roomImages';
          if (req.body.isProfilePic) {
            fieldName = 'profilePic';
          } else if (req.body.isHotelImage) {
            fieldName = 'hotelImages';
          } else if (req.body.isPlaceImage) {
            fieldName = 'placeImages';
          } else {
            fieldName = 'roomImages';
          }
          const rootDir = `./${process.env.ROOT_UPLOAD_DIR}`;
          const dest = `./${process.env.ROOT_UPLOAD_DIR}/${fieldName}`;
          fs.access(rootDir, function(err) {
            if (err) {
              fs.mkdir(rootDir, err => {
                fs.access(dest, function(error) {
                  if (error) {
                    console.log('Directory does not exist.');
                    return fs.mkdir(dest, error => cb(error, dest));
                  } else {
                    console.log('Directory exists.');
                    return cb(null, dest);
                  }
                });
                // cb(err, rootDir)
              });
            } else {
              return cb(null, dest);
            }
          });
        },
        filename: (req, file, cb) => {
          console.log(file);
          let fileName = file.originalname.split('.');
          fileName = `${fileName[0]}--${file.fieldname}--${Date.now()}.${
            fileName[1]
          }`;
          console.log(fileName);
          return cb(null, fileName);
        },
      }),
    }),
  )
  async upload(
    @UploadedFiles() files,
    @Req() req,
    @Body() body: UploadBodyDto,
  ) {
    const data = new FilesDto(files);
    const errors = await validate(data);
    if (errors && errors.length) {
      throw new BadRequestException({
        statusCode: HttpStatus.BAD_REQUEST,
        error: errors,
        message: errors,
      });
    }
    return await this.uploadService.createAttachment(data.files, body);
  }
}
