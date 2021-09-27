import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class PointEntity {
  @Prop({ type: String, enum: ['Point'] })
  type: string;

  @Prop({ type: [Number] })
  coordinates: [Number];
}

export const PointSchema = SchemaFactory.createForClass(PointEntity);

@Schema({ _id: false })
export class AddressEntity {
  _id?: any;

  @Prop()
  addressName: string;

  @Prop()
  country?: string;

  @Prop()
  streetAddress?: string;

  @Prop()
  coordinates: string;
}

export const AddressSchema = SchemaFactory.createForClass(AddressEntity);
