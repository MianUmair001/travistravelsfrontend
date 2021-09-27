import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { Document } from 'mongoose';

export enum FeedbackRatingType {
  feedback = 'feedback',
  rating = 'rating',
  suggestion = 'suggestion',
  review = 'review',
}

export type FeedbackRatingDocument = FeedbackRatingEntity &
  Document & {
    _id?: any;
  };
@Schema({ timestamps: true, _id: true })
export class FeedbackRatingEntity {
  _id: any;

  @Prop({
    type: String,
    enum: FeedbackRatingType,
    default: FeedbackRatingType.feedback,
  })
  type: string;

  @Prop({
    type: Number,
    min: [0, 'Sorry! rating cannot be in negative'],
    max: 5,
  })
  rating: number;

  @Prop()
  text: string;

  @Prop({ required: false, type: [AttachmentsSchema] })
  images: AttachmentsEntity[];
  
}

export const FeedbackRatingSchema = SchemaFactory.createForClass(
  FeedbackRatingEntity,
);
