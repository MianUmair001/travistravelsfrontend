import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdDto } from 'src/global/dto/mongo-id.dto';
import { NameDto } from 'src/global/dto/name.dto';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { TourService } from './tours.service';

@ApiTags('Tours')
@Controller('tours')
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post()
  create(@Body() createTourDto: CreateTourDto) {
    return this.tourService.create({ ...createTourDto });
  }

  @Get()
  findAll() {
    return this.tourService.findAll();
  }

  @Get('/:id')
  findOne(@Param() { id }: MongoIdDto) {
    return this.tourService.findOne(id);
  }

  @Get('/name/:name')
  findTourWithName(@Param() { name }: NameDto) {
    return this.tourService.findTourWithName(name);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.tourService.update(id, updateTourDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.tourService.remove(id);
  }
}
