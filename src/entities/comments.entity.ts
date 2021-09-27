import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AuthEntity } from './auth.entity';
import { Document } from 'mongoose';
import { PostEntity } from './post.entity';

/**
 * Remember:Note
 *    Every Time a Comment is going to be made we have to provide post id with it
 *    weather it is the replied comment e.g comment on comment or the first parent comment.
 *    And Comment has a parent Type that tells you that weather this specific comment belongs to the
 *    comment or the post
 */

export type CommentsDocument = CommentsEntity &
  Document & {
    _id?: any;
  };

@Schema({ timestamps: true, _id: true })
export class CommentsEntity {
  _id: any;

  @Prop()
  text: string;

  @Prop({ required: false, ref: CommentsEntity.name })
  parentId?: string;

  @Prop({ ref: PostEntity.name })
  postId: string;

  @Prop({ required: true, ref: AuthEntity.name })
  createdBy: string;
}

export const CommentsSchema = SchemaFactory.createForClass(CommentsEntity);
