import { PartialType } from '@nestjs/swagger';
import { CreateFeedbackRatingDto } from './create-feedbackRating';

export class UpdateFeedBackRatingDto extends PartialType(
  CreateFeedbackRatingDto,
) {}
