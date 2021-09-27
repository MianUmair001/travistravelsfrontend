import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressEntity, AddressSchema } from './address.entity';
import { AuthEntity } from './auth.entity';
import { Document } from 'mongoose';

export type UserDocument = UserEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class UserEntity {
  @Prop()
  name?: string;

  @Prop({ unique: true })
  username?: string;

  @Prop({
    validate: {
      validator: v => {
        const regex = new RegExp(
          /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
        );
        return regex.test(v);
      },
      message: props => `${props.value} is not a valid phone number!`,
    },
  })
  phone?: string;

  @Prop({ type: AddressSchema })
  address?: AddressEntity;

  @Prop({ ref: AuthEntity.name })
  auth: string;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);
