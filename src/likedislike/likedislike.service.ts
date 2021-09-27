import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  LikeDislikeDocument,
  LikeDislikeEntity,
} from 'src/entities/likedislike.entity';
import { PostService } from 'src/post/post.service';
import { CreateLikeDislikeDto } from './dto/create-likedislike.dto';
import { UpdateLikeDislikeDto } from './dto/update-likedislike.dto';

@Injectable()
export class LikeDislikeService {
  constructor(
    @InjectModel(LikeDislikeEntity.name)
    private readonly likedislikeModel: Model<LikeDislikeDocument>,
    private readonly postService: PostService,
  ) {}

  checkDto = (
    createLikeDislikeDto: CreateLikeDislikeDto | UpdateLikeDislikeDto,
  ): CreateLikeDislikeDto | UpdateLikeDislikeDto => {
    if (createLikeDislikeDto.liked) {
      return {
        ...createLikeDislikeDto,
        disliked: false,
      };
    } else {
      return {
        ...createLikeDislikeDto,
        disliked: true,
      };
    }
  };

  async create(createLikeDislikeDto: CreateLikeDislikeDto) {
    let createLikeDislikeDtoUpdated = await this.checkDto(createLikeDislikeDto);
    const postExists = await this.likedislikeModel.findOne({
      userId: createLikeDislikeDtoUpdated.userId,
      postId: createLikeDislikeDtoUpdated.postId,
    });
    console.log('Yeah Post Exits');
    if (postExists) {
      console.log('in If', postExists);
      return await this.update(postExists._id, createLikeDislikeDtoUpdated);
    } else {
      await this.updateCount(createLikeDislikeDto);
      let result = await this.likedislikeModel.create({
        ...createLikeDislikeDtoUpdated,
      });
      return result;
    }
  }

  async updateCount(
    createLikeDislikeDto: CreateLikeDislikeDto | UpdateLikeDislikeDto,
  ) {
    console.log('I am In Update Count');
    let likedislikeExists = await this.likedislikeModel.findOne({
      postId: createLikeDislikeDto.postId,
      userId: createLikeDislikeDto.userId,
    });
    console.log(likedislikeExists);
    let post = await this.postService.findOne(createLikeDislikeDto.postId);
    let increment: Number = 1;
    if (likedislikeExists && likedislikeExists.userId) {
      console.log(
        'Like Dislike exists',
        'Like Dislike Existed',
        likedislikeExists,
        createLikeDislikeDto,
      );
      if (
        likedislikeExists.liked === true &&
        createLikeDislikeDto.liked === false
      ) {
        console.log('User has Disliked the Post');
        let likeCount: Number = +Number(post.likeCount) - +Number(increment);
        let dislikeCount: Number =
          +Number(post.dislikeCount) + +Number(increment);
        console.log(
          'likeCount is ',
          likeCount,
          'DislikeCount is ',
          dislikeCount,
        );

        post = { ...post, likeCount, dislikeCount };
        console.log('New Post Record is ', post);
      } else if (
        likedislikeExists.liked === false &&
        createLikeDislikeDto.liked === true
      ) {
        console.log('user has liked the post');
        let likeCount: Number = +Number(post.likeCount) + +Number(increment);
        let dislikeCount: Number =
          +Number(post.dislikeCount) - +Number(increment);
        console.log(
          'likeCount is ',
          likeCount,
          'DislikeCount is ',
          dislikeCount,
        );
        post = { ...post, likeCount: likeCount, dislikeCount: dislikeCount };
        console.log('New Post Record should be ', post);
      }
    } else {
      console.log('It is the New Like Dislike Record gooing to be added');
      if (createLikeDislikeDto.liked === true) {
        console.log('User has liked the post');
        let likeCount: Number = +Number(post.likeCount) + +Number(increment);
        post = { ...post, likeCount: likeCount };
        console.log('likeCount is ', likeCount);
        console.log('New Post Record is ', post);
      } else {
        console.log('User has disliked the post');
        let dislikeCount: Number =
          +Number(post.dislikeCount) + +Number(increment);
        post = { ...post, dislikeCount: dislikeCount };
        console.log('New Post Record is ', post);
      }
    }
    return await this.postService.update(createLikeDislikeDto.postId, post);
  }

  async update(id: string, updateLikeDislikeDto: UpdateLikeDislikeDto) {
    console.log('I am In Update', id, updateLikeDislikeDto);
    await this.updateCount(updateLikeDislikeDto);
    const result = await this.likedislikeModel
      .findByIdAndUpdate(id, updateLikeDislikeDto, { new: true })
      .lean();
    return result;
  }

  async remove(id: string) {
    return await this.likedislikeModel.findByIdAndRemove(id);
  }
}
