import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { PlanDocument, PlanEntity } from '../entities/plan.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Injectable()
export class PlanService {
  constructor(
    @InjectModel(PlanEntity.name)
    private readonly planModel: Model<PlanDocument>,
  ) {}

  async getAllPlan() {
    return this.planModel.find({});
  }

  async getSinglePlan(id: string) {
    console.log('we are in Services', id);
    return this.planModel.findById(id);
  }

  async getSinglePlanByName(name: string) {
    return this.planModel.findOne({ name: name }).lean();
  }

  async createPlan(createPlanDto: CreatePlanDto) {
    return await this.planModel.create(createPlanDto);
  }

  async updatePlan(id: string, updatePlanDto: UpdatePlanDto) {
    return await this.planModel
      .findByIdAndUpdate(id, { updatePlanDto }, { new: true })
      .lean();
  }

  async deletePlan(id: string) {
    return this.planModel.findByIdAndDelete(id);
  }
}
