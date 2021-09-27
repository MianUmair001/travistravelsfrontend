import { Module } from '@nestjs/common';
import { FeedbackRatingController } from './feedbackRating.controller';
import { FeedBackRatingServices } from './feedbackRating.services';

@Module({
  imports: [],
  providers: [FeedBackRatingServices],
  controllers: [FeedbackRatingController],
  exports: [FeedBackRatingServices],
})
export class FeedBackRatingModule {}
