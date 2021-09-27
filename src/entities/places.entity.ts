import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { Document } from 'mongoose';

export type PlacesDocument = PlacesEntity &
  Document & {
    _id?: any;
  };
@Schema({ timestamps: true, _id: true })
export class PlacesEntity {
  _id: any;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ required: false, type: [AttachmentsSchema] })
  images: AttachmentsEntity[];
}
  
export const PlacesSchema = SchemaFactory.createForClass(PlacesEntity);
