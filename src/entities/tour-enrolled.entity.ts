import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { TourEntity } from './tour.entity';
import { Document } from "mongoose";
import { AuthEntity } from './auth.entity';


export type ToursEnrolledDocument = TourEnrolledEntity & Document & {
  _id?: any;
};

export class TourEnrolledEntity {
  _id: any;

  @Prop({ ref: TourEntity.name })

  tour: string;
}

export const TourEnrolledSchema = SchemaFactory.createForClass(TourEnrolledEntity)