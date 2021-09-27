import { AuthEntity } from './auth.entity';
import { AddressEntity, AddressSchema } from './address.entity';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AttachmentsEntity, AttachmentsSchema } from './attachment.entity';
import { Document } from 'mongoose';
import { CommentsEntity, CommentsSchema } from './comments.entity';
import { UserEntity, UserSchema } from './user.entity';

export type PostDocument = PostEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class PostEntity {
  _id: any;
  @Prop({ required: false })
  text?: string;

  @Prop({ required: false, ref: AuthEntity.name })
  mentions?: string[];

  @Prop({ required: false, ref: AuthEntity.name })
  tagged?: string[]; // tagged user. example: usama is with umair

  @Prop({ required: false })
  hashTags?: string[];

  @Prop({ required: false, type: [AttachmentsSchema] })
  attachments?: AttachmentsEntity[]; // to add media with post

  @Prop({ required: true, ref: AuthEntity.name })
  createdBy: string;

  @Prop({ type: AddressSchema })
  location?: AddressEntity;

  @Prop({ required: false, default: 0 })
  likeCount?: Number;

  @Prop({ required: false, default: 0 })
  dislikeCount?: Number;
}

export const PostSchema = SchemaFactory.createForClass(PostEntity);
