import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { RoomsEntity } from './rooms.entity';
import { Document } from 'mongoose';
import { AuthEntity } from './auth.entity';


export type PlanDocument = PlanEntity & Document & {
  _id?: any;
};

@Schema({ timestamps: true, _id: true })
export class PlanEntity {

  _id: any;

  @Prop({ unique: true })
  name: string;

  @Prop()
  price: number;

  @Prop()
  description: string;

  @Prop({ type: Number, default: 1 })
  rooms: number;
}

export const PlanSchema = SchemaFactory.createForClass(PlanEntity);