import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdDto } from '../global/dto/mongo-id.dto';
import { NameDto } from '../global/dto/name.dto';

@ApiTags('Hotels')
@Controller('hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }

  @Get('/:id')
  findOne(@Param() { id }: MongoIdDto) {
    return this.hotelService.findOne(id);
  }

  @Get('name/:name')
  async findHotelWithName(@Param() { name }: NameDto) {
    return await this.hotelService.findHotelWithName(name);
  }

  @Put('/:id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }
}
