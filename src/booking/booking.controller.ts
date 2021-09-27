import { Get, Param, Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BookingService } from './booking.services';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
@ApiTags('Booking')
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }
  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.bookingService.findById(id);
  }
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }
  @Get('/name/:name')
  findByHotelName(@Param('name') name: string) {
    return this.bookingService.findByHotelName(name);
  }
  @Put('/:id')
  update(@Param('id') id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(id, updateBookingDto);
  }
  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(id);
  }
}
