import { Delete, Param, Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdDto } from 'src/global/dto/mongo-id.dto';
import { NameDto } from 'src/global/dto/name.dto';
import { CreatePlacesDto } from './dto/create-places.dto';
import { UpdatePlacesDto } from './dto/update-places.dto';
import { PlacesServices } from './places.services';
@ApiTags('Places')
@Controller('places')
export class PlacesController {
  constructor(private readonly placesServices: PlacesServices) {}
  @Post()
  create(@Body() createPlacesDto: CreatePlacesDto) {
    return this.placesServices.create(createPlacesDto);
  }
  @Get()
  findAll() {
    return this.placesServices.findAll();
  }
  @Get('/name/:name')
  findByName(@Param() { name }: NameDto) {
    return this.placesServices.findByName(name);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() updatePlacesDto: UpdatePlacesDto) {
    return this.placesServices.update(id, updatePlacesDto);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.placesServices.remove(id);
  }
}
