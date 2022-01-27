import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTestKitDto } from './dto/CreateTestKit.dto';
import { TestKit } from './schemas/test-kit.schema';

@Injectable()
export class TestKitService {
  constructor(
    @InjectModel(TestKit.name)
    private readonly testKitModel: Model<TestKit>,
  ) {}

  async getNumberOfKits() {
    const testKits = await this.testKitModel.find();
    if (testKits[0]) {
      return {
        totalKits: testKits[0].totalKits,
      };
    } else {
      return {
        totalKits: 0,
      };
    }
  }

  async addTestKits(payload: CreateTestKitDto) {
    const testKit = await this.testKitModel.find();
    if (Array.isArray(testKit) && testKit.length) {
      return this.testKitModel.findByIdAndUpdate(testKit[0].id, {
        $inc: {
          totalKits: payload.numberOfNewKits,
        },
      });
    } else {
      return this.testKitModel.create({
        totalKits: payload.numberOfNewKits,
      });
    }
  }
}
