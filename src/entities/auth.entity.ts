import { Document, Model } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CONSTANTS } from '../global/constants';


export enum UserRoleEnum {
  user = 'user',
  admin = 'admin',
}

export type AuthDocument = AuthEntity & Document & {
  _id?: any;
};

export interface AuthModel extends Model<AuthDocument> {
  findUserByEmail: (...args) => any
}

@Schema({timestamps: true})
export class AuthEntity {

  _id?: any;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: Boolean, default: false })
  isEmailVerified?: boolean;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;

  /**
   * A list of user's roles
   * @example ['user']
   */
  @Prop({
    required: true,
    type: String,
    enum: Object.keys(UserRoleEnum).map(k => UserRoleEnum[k]),
    default: UserRoleEnum.user,
  })
  role?: UserRoleEnum;
}

export const AuthSchema = SchemaFactory.createForClass(AuthEntity);

AuthSchema.statics.findUserByEmail = async function(email) {
  const user = await this.findOne({ email, isActive: true });
  if (!user) throw new Error(CONSTANTS.userNotFound);
  return user;
};