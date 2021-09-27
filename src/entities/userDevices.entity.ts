import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export type UserDevicesDocument = UserDevicesEntity & Document & {
  _id?: any;
};

@Schema({timestamps: true})
export class UserDevicesEntity {

  _id?: any;

  @Prop()
  deviceId: string;

  @Prop()
  ip: string;

  @Prop()
  os: string;

  @Prop()
  userAgent: string;
}

export const UserDevicesSchema = SchemaFactory.createForClass(UserDevicesEntity);