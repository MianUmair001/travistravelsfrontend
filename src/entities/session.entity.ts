import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserDevicesEntity, UserDevicesSchema } from './userDevices.entity';
import { AuthEntity } from './auth.entity';

export type SessionDocument = SessionEntity & Document & {
  _id?: any;
};

@Schema({timestamps: true})
export class SessionEntity {

  _id?: any;

  @Prop({ ref: AuthEntity.name })
  user: AuthEntity;

  @Prop({ ref: UserDevicesEntity.name })
  userDevice: UserDevicesEntity;
}

export const SessionSchema = SchemaFactory.createForClass(SessionEntity);