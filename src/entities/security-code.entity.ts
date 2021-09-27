import { Document, Model } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';

export enum SecurityCodeTypeEnum {
  verification = 'verification',
  forgot = 'forgot',
  otp = 'otp'
}

export type SecurityCodeDocument = SecurityCodeEntity & Document & {
  _id?: any;
};

export interface SecurityCodeModel extends Model<SecurityCodeDocument> {
  findCode: (...args) => any
}

@Schema({timestamps: true})
export class SecurityCodeEntity {

  _id?: any;

  @Prop()
  email: string;

  @Prop()
  code: number;

  @Prop({type: SecurityCodeTypeEnum})
  type: SecurityCodeTypeEnum;
}

export const SecurityCodeSchema = SchemaFactory.createForClass(SecurityCodeEntity);


SecurityCodeSchema.statics.findCode = async function(email, code, type) {
  const securityCode = await this.findOne({ email, code, type });
  if (!securityCode) throw new HttpException('Invalid Code', HttpStatus.UNPROCESSABLE_ENTITY);
  return securityCode;
};