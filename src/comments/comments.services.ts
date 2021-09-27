import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentsDocument, CommentsEntity } from 'src/entities/comments.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentsDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(CommentsEntity.name)
    private readonly commentsModel: Model<CommentsDocument>,
  ) {}
  async create(createCommentDto: CreateCommentDto) {
    return await this.commentsModel.create({ ...createCommentDto });
  }
  async findAll() {
    return await this.commentsModel.find({}).lean();
  }
  async findOne(id: string) {
    return await this.commentsModel.findById(id).lean();
  }

  async findByName(createdBy: string) {
    return await this.commentsModel.find({ createdBy }).lean();
  }

  async update(id: string, updateCommentsDto: UpdateCommentsDto) {
    return await this.commentsModel
      .findByIdAndUpdate(id, updateCommentsDto, { new: true })
      .lean();
  }
  async findAllByParentId(parentId: string) {
    return await this.commentsModel.find({ parentId: parentId }).lean();
  }
  async remove(id: string) {
    const comments = await this.findAllByParentId(id);
    comments.map(async comment => {
      await this.commentsModel.findByIdAndRemove(comment._id).lean();
    });
    return await this.commentsModel.findByIdAndRemove(id).lean();
  }
}
