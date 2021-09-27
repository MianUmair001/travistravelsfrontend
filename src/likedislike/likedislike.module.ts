import { Module } from '@nestjs/common';
import { PostModule } from 'src/post/post.module';
import { PostService } from 'src/post/post.service';
import { LikeDislikeController } from './likedislike.controller';
import { LikeDislikeService } from './likedislike.service';
@Module({
  imports: [PostModule, PostService],
  providers: [LikeDislikeService],
  controllers: [LikeDislikeController],
  exports: [LikeDislikeService, PostService],
})
export class LikeDislikeModule {}
