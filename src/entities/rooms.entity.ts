import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PlanEntity } from './plan.entity';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { Document } from 'mongoose';
import { HotelsEntity } from './hotels.entity';


export type RoomsDocument = RoomsEntity & Document & {
  _id?: any;
};

@Schema({ timestamps: true, _id: true })
export class RoomsEntity {

  _id: any;

  @Prop({ ref: PlanEntity.name })
  type: string;

  @Prop()
  planName: string;

  @Prop()
  noOfBathroom: number;

  @Prop()
  noOfBeds: number;

  @Prop({ required: true, type: [AttachmentsSchema] })
  images: AttachmentsEntity[];

  @Prop({ ref: HotelsEntity.name })
  hotel: string;
}

export const RoomsSchema = SchemaFactory.createForClass(RoomsEntity);