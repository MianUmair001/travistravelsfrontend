import {
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
  Body,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.services';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentsDto } from './dto/update-comment.dto';
@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsServices: CommentsService) {}
  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsServices.create(createCommentDto);
  }
  @Get()
  findAll() {
    return this.commentsServices.findAll();
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.commentsServices.findOne(id);
  }

  @Get('/name/:name')
  findByName(@Param('name') name: string) {
    return this.commentsServices.findByName(name);
  }
  @Get('/comments/:commentId')
  findAllByParentId(@Param('commentId') commentId:string) {
    return this.commentsServices.findAllByParentId(commentId);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() updateCommentsDto: UpdateCommentsDto,
  ) {
    return this.commentsServices.update(id, updateCommentsDto);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.commentsServices.remove(id);
  }
}
