import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PlanEntity } from './plan.entity';
import { FeedbackRatingEntity } from './feedback-rating.entity';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { Document } from 'mongoose';

export type HotelsDocument = HotelsEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true, versionKey: false })
export class HotelsEntity {
  _id: any;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ required: false, type: [AttachmentsSchema] })
  images: AttachmentsEntity[];

  // @Prop({ required: true, type: [RoomsSchema] })
  // rooms: RoomsEntity[];

  @Prop({ type: Boolean, default: false })
  isVerified?: boolean;
}

export const HotelsSchema = SchemaFactory.createForClass(HotelsEntity);
