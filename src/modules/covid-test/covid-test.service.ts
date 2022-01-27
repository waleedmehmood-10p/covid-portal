import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCovidTestDto } from './dto/CreateCovidTest.dto';
import { CovidTest } from './schemas/covid-test.schema';
import { UpdateCovidTestDto } from './dto/UpdateCovidTest.dto';
import { Patient } from '../patient/schemas/patient.schema';
import * as moment from 'moment';
import { Place } from '../place/schemas/place.schemas';
import { TestKit } from '../test-kit/schemas/test-kit.schema';

@Injectable()
export class CovidTestService {
  constructor(
    @InjectModel(CovidTest.name)
    private readonly covidTestModel: Model<CovidTest>,

    @InjectModel(Patient.name)
    private readonly patientModel: Model<Patient>,

    @InjectModel(Place.name)
    private readonly placeModel: Model<Place>,

    @InjectModel(TestKit.name)
    private readonly testKitModel: Model<TestKit>,
  ) {}

  async getAllCovidTests(): Promise<CovidTest[]> {
    return this.covidTestModel.find();
  }

  async getCovidTestById(id): Promise<CovidTest> {
    return this.covidTestModel.findById(id);
  }

  async createCovidTest(payload: CreateCovidTestDto) {
    const patient = await this.patientModel.findById(payload.patientId, {
      ailementHistory: 1,
    });

    if (payload.testResult === 'NEGATIVE') {
      const positiveIndex = patient.ailementHistory.findIndex(
        (x) => x.status === 'INFECTED',
      );
      if (positiveIndex > -1) {
        patient.ailementHistory[positiveIndex].status = 'RECOVERED';
        patient.ailementHistory[positiveIndex].recoveredDate = payload.testDate;
        await patient.save();
      }
    } else {
      const ailementlingDaysCount = moment().diff(
        payload.testDate.toISOString(),
        'days',
      );

      const place = await this.placeModel.findById(payload.testLocation);
      patient.ailementHistory.push({
        abroad: payload.travelledAbroad,
        inftectedDate: payload.testDate,
        placeId: payload.testLocation,
        ailementlingDaysCount,
        placeName: place.name,
        status: 'INFECTED',
      });
    }

    patient.save();

    const testKits = await this.testKitModel.find();
    await testKits[0].updateOne({
      $inc: {
        totalKits: -1,
      },
    });
    return this.covidTestModel.create(payload);
  }

  async updateCovidTest(id: string, payload: UpdateCovidTestDto) {
    return this.covidTestModel.findByIdAndUpdate(id, payload);
  }
}
