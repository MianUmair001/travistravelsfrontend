import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlanService } from './plan.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { ApiTags } from '@nestjs/swagger';
import { MongoIdDto } from '../global/dto/mongo-id.dto';
import { NameDto } from '../global/dto/name.dto';
import console from 'console';
import { UpdatePlanDto } from './dto/update-plan.dto';

@ApiTags('Plan')
@Controller('plan')
export class PlanController {
  constructor(private readonly planService: PlanService) {}

  @Get()
  async getAllPlan() {
    return await this.planService.getAllPlan();
  }

  // @Get('/:id')
  // async getSinglePlan(@Param() { id }: MongoIdDto) {
  //   {
  //     console.log(id);
  //   }'
  //   return await this.planService.getSinglePlan(id);
  // }
  @Get('/:id')
  async getSinglePlan(@Param() { id }: MongoIdDto) {
    return await this.planService.getSinglePlan(id);
  }

  @Put('/:id')
  async updatePlan(
    @Param('id') id: string,
    @Body() updatePlanDto: UpdatePlanDto,
  ) {
    return await this.planService.updatePlan(id, updatePlanDto);
  }

  @Get('plan/:name')
  async getSinglePlanByName(@Param() { name }: NameDto) {
    return await this.planService.getSinglePlanByName(name);
  }

  @Post()
  async createPlan(@Body() body: CreatePlanDto) {
    return this.planService.createPlan(body);
  }

  @Delete('/:id')
  async deletePlan(@Param() { id }: MongoIdDto) {
    return await this.planService.deletePlan(id);
  }
}
