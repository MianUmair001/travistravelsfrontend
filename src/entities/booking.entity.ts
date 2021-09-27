import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HotelsEntity } from './hotels.entity';
import { Document } from 'mongoose';

export enum BookingType {
  selfTour = 'selfTour',
  companyTour = 'companyTour',
}

export type BookingDocument = BookingEntity &
  Document & {
    _id?: any;
  };
@Schema({ timestamps: true, _id: true })
export class BookingEntity {
  _id: any;

  @Prop({ enum: BookingType, default: BookingType.companyTour })
  type: string;

  @Prop({ required: true })
  title: string;

  @Prop({ type: Date })
  bookingDate: string;

  @Prop({ ref: HotelsEntity.name, required: true })
  bookedHotel: string;
}

export const BookingSchema = SchemaFactory.createForClass(BookingEntity);
