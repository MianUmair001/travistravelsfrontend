import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TourDocument, TourEntity } from 'src/entities/tour.entity';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class TourService {
  constructor(
    @InjectModel(TourEntity.name)
    private readonly tourModel: Model<TourDocument>,
  ) {}
  async create(createTourDto: CreateTourDto) {
    return await this.tourModel.create({ ...createTourDto });
  }
  async findAll() {
    return await this.tourModel.find({}).lean();
  }
  async findOne(id: string) {
    return await this.tourModel.findById(id).lean();
  }
  async findTourWithName(name: string) {
    return await this.tourModel.findOne({ name }).lean();
  }
  async update(id: string, updateTourDto: UpdateTourDto) {
    console.log('update ' + id);
    return this.tourModel
      .findByIdAndUpdate(id, { updateTourDto }, { new: true })
      .lean();
  }
  async remove(id: string) {
    return await this.tourModel.findByIdAndDelete(id).lean();
  }
}
