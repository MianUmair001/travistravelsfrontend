import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostEntity } from './post.entity';
import { UserEntity } from './user.entity';

export type LikeDislikeDocument = LikeDislikeEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class LikeDislikeEntity {
  _id: any;

  @Prop()
  liked: Boolean;

  @Prop()
  disliked: Boolean;

  @Prop({ ref: UserEntity.name })
  userId: string;

  @Prop({ ref: PostEntity.name })
  postId: string;
}

export const LikeDislikeSchema = SchemaFactory.createForClass(
  LikeDislikeEntity,
);
