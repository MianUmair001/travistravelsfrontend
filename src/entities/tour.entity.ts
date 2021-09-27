import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PlacesEntity, PlacesSchema } from './places.entity';

export enum TourStatus {
  initialized = 'initialized',
  inprocess = 'inprocess',
  started = 'started',
  onjourney = 'onjourney',
  ended = 'ended',
}

export enum TourType {
  self = 'self',
  withtravistravels = 'withtravistravels',
}

export type TourDocument = TourEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class TourEntity {
  _id?: any;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: TourType, default: TourType.withtravistravels })
  tourType: string;

  @Prop()
  startLocation: string;

  @Prop()
  endLocation: string;

  @Prop()
  price: number;

  @Prop()
  startDate: string;

  @Prop()
  endDate: string;

  @Prop({ enum: TourStatus, default: TourStatus.initialized })
  status?: string;

  @Prop({ ref: PlacesEntity.name, required: false, schema: [PlacesSchema] })
  places: PlacesEntity[];
}

export const TourSchema = SchemaFactory.createForClass(TourEntity);
