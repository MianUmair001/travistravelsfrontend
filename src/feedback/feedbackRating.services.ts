import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  FeedbackRatingDocument,
  FeedbackRatingEntity,
} from 'src/entities/feedback-rating.entity';
import { CreateFeedbackRatingDto } from './dto/create-feedbackRating';
import { UpdateFeedBackRatingDto } from './dto/update-feedbackRating';
@Injectable()
export class FeedBackRatingServices {
  constructor(
    @InjectModel(FeedbackRatingEntity.name)
    private readonly feedbackRatingModel: Model<FeedbackRatingDocument>,
  ) {}

  async create(createFeedbackDto: CreateFeedbackRatingDto) {
    return await this.feedbackRatingModel.create({ ...createFeedbackDto });
  }
  async findAll() {
    return this.feedbackRatingModel.find({}).lean();
  }
  async findOne(id: string) {
    return await this.feedbackRatingModel.findById(id).lean();
  }
  async update(id: string, updateFeedBackRatingDto: UpdateFeedBackRatingDto) {
    return await this.feedbackRatingModel.findByIdAndUpdate(
      id,
      updateFeedBackRatingDto,
      { new: true },
    );
  }
  async remove(id: string) {
    return await this.feedbackRatingModel.findByIdAndRemove(id);
  }
}
