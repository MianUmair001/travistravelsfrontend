import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { mimeTypesArray } from '../global/types/mimeTypes';
import { BucketFolder } from '../global/types/awsHelper';

export type AttachmentsDocument = AttachmentsEntity &
  Document & {
    _id: any;
  };

@Schema({ timestamps: true })
export class AttachmentsEntity {
  @Prop({ required: true, enum: mimeTypesArray })
  type: string;

  @Prop({ required: false })
  name: string; // name of file

  @Prop()
  url?: string;

  @Prop({ Type: String, default: process.env.AWS_BUCKET_NAME })
  bucket?: string;

  @Prop({ required: true, enum: Object.keys(BucketFolder) })
  folderName: string;

  @Prop({ type: Object, required: false })
  meta?: any; // metadata like bucket name, or folder name or any other

  @Prop({ type: Boolean, default: true })
  isTemp?: boolean;

  @Prop()
  size?: number;

  @Prop()
  encoding?: string;
}

export const AttachmentsSchema = SchemaFactory.createForClass(
  AttachmentsEntity,
);
