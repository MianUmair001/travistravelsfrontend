import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PostDocument, PostEntity } from 'src/entities/post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(PostEntity.name)
    private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostDto: CreatePostDto) {
    return await this.postModel.create({ ...createPostDto });
  }
  async findAll() {
    return await this.postModel.find({}).lean();
  }
  async findOne(id: string) {
    return await this.postModel.findById(id).lean();
  }
  async findByName(createdBy: string) {
    return await this.postModel.find({ createdBy }).lean();
  }
  async update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .lean();
  }
  async remove(id: string) {
    return this.postModel.findByIdAndDelete(id);
  }
}
