import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PlacesDocument, PlacesEntity } from 'src/entities/places.entity';
import { MongoIdDto } from 'src/global/dto/mongo-id.dto';
import { CreatePlacesDto } from './dto/create-places.dto';
import { UpdatePlacesDto } from './dto/update-places.dto';

@Injectable()
export class PlacesServices {
  constructor(
    @InjectModel(PlacesEntity.name)
    private readonly placesModel: Model<PlacesDocument>,
  ) {}
  async create(createPlacesDto: CreatePlacesDto) {
    return this.placesModel.create({ ...createPlacesDto });
  }
  async findAll() {
    return this.placesModel.find({}).lean();
  }
  async findByName(name: string) {
    console.log(name);
    return this.placesModel.findOne({ name: name }).lean();
  }
  async update(id: string, updatePlacesDto: UpdatePlacesDto) {
    return this.placesModel.findByIdAndUpdate(id, updatePlacesDto, {
      new: true,
    });
  }
  async remove(id: string) {
    return this.placesModel.findByIdAndDelete(id).lean();
  }
}
