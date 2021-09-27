import { Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLikeDislikeDto } from './dto/create-likedislike.dto';
import { UpdateLikeDislikeDto } from './dto/update-likedislike.dto';
import { LikeDislikeService } from './likedislike.service';

@ApiTags('LikeDislike')
@Controller('likedislike')
export class LikeDislikeController {
  constructor(private readonly likedislikeServices: LikeDislikeService) {}
  @Post()
  create(@Body() createLikeDislikeDto: CreateLikeDislikeDto) {
    console.log('createLikeDislikeDto', createLikeDislikeDto);
    return this.likedislikeServices.create(createLikeDislikeDto);
  }
  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() updateLikeDislikeDto: UpdateLikeDislikeDto,
  ) {
    console.log(updateLikeDislikeDto);
    return this.likedislikeServices.update(id, updateLikeDislikeDto);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.likedislikeServices.remove(id);
  }
}
