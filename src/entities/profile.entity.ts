import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressEntity, AddressSchema } from './address.entity';
import { Document } from 'mongoose';
import { AuthEntity } from './auth.entity';

export type ProfileDocument = ProfileEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class ProfileEntity {
  _id: any;

  @Prop({ type: AddressSchema })
  address: AddressEntity;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ type: Date })
  DateOfBirth: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  username: string;

  @Prop({ ref: AuthEntity.name })
  auth: string;
}

export const ProfileSchema = SchemaFactory.createForClass(ProfileEntity);
