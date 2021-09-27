import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AttachmentsDocument, AttachmentsEntity } from '../entities/attachment.entity';
import { Model } from 'mongoose';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel(AttachmentsEntity.name)
    private readonly attachmentModel: Model<AttachmentsDocument>,
  ) {
  }

  async createAttachment(files, body) {
    const { fieldname, originalname, encoding, mimetype, destination, filename, path, size } = files.file[0];
    const folderName = destination.split('/');
    const isTemp = body.isProfilePic !== 'true'
    return {
      type: mimetype,
      name: filename,
      folderName: folderName[2],
      url: destination,
      size: size,
      encoding: encoding,
      isTemp: isTemp
    }
  }
}
