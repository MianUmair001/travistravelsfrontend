import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BookingDocument, BookingEntity } from 'src/entities/booking.entity';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(BookingEntity.name)
    private readonly bookingModel: Model<BookingDocument>,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    return this.bookingModel.create({ ...createBookingDto });
  }
  async findById(id: string) {
    return this.bookingModel.findById(id).lean();
  }
  async findAll() {
    return this.bookingModel.find({}).lean();
  }
  async findByHotelName(bookedHotel: string) {
    return this.bookingModel.find({ bookedHotel }).lean();
  }
  async update(id: string, updateBookingDto: UpdateBookingDto) {
    return this.bookingModel.findByIdAndUpdate(id, updateBookingDto, {
      new: true,
    });
  }
  async remove(id: string) {
    return this.bookingModel.findByIdAndDelete(id);
  }
}
