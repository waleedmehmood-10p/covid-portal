import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCovidTestDto } from './dto/CreateCovidTest.dto';
import { CovidTest } from './schemas/covid-test.schema';

@Injectable()
export class CovidTestService {
  constructor(
    @InjectModel(CovidTest.name)
    private readonly covidTestModel: Model<CovidTest>,
  ) {}

  async getAllCovidTests(): Promise<CovidTest[]> {
    return this.covidTestModel.find();
  }

  async createCovidTest(payload: CreateCovidTestDto) {
    return this.covidTestModel.create(payload);
}
}
