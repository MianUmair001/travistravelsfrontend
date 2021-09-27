import { Param } from '@nestjs/common';
import { Body, Controller, Post, Get, Put, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdDto } from 'src/global/dto/mongo-id.dto';
import { NameDto } from 'src/global/dto/name.dto';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';
@ApiTags('Post')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }
  @Get()
  findAll() {
    return this.postService.findAll();
  }
  @Get('/:id')
  findOne(@Param() { id }: MongoIdDto) {
    return this.postService.findOne(id);
  }
  @Get('/name/:name')
  findByName(@Param() { name }: NameDto) {
    return this.postService.findByName(name);
  }
  @Put('/:id')
  update(
    @Param('id') { id }: MongoIdDto,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto);
  }
  @Delete('/:id')
  Remove(@Param() { id }: MongoIdDto) {
    return this.postService.remove(id);
  }
}
