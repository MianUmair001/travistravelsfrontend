import { Body, Delete, Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFeedbackRatingDto } from './dto/create-feedbackRating';
import { UpdateFeedBackRatingDto } from './dto/update-feedbackRating';
import { FeedBackRatingServices } from './feedbackRating.services';
@ApiTags('Feedback')
@Controller('feedback')
export class FeedbackRatingController {
  constructor(private readonly feedbackRatingService: FeedBackRatingServices) {}
  @Post()
  create(@Body() createFeedbackRatingDto: CreateFeedbackRatingDto) {
    return this.feedbackRatingService.create(createFeedbackRatingDto);
  }
  @Get()
  findAll() {
    return this.feedbackRatingService.findAll();
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.feedbackRatingService.findOne(id);
  }
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() updateFeedBackRatingDto: UpdateFeedBackRatingDto,
  ) {
    return this.feedbackRatingService.update(id, updateFeedBackRatingDto);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.feedbackRatingService.remove(id);
  }
}
