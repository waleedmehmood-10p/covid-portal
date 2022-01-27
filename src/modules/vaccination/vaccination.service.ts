import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Patient } from '../patient/schemas/patient.schema';
import { Place } from '../place/schemas/place.schemas';
import { TestKit } from '../test-kit/schemas/test-kit.schema';
import { CreateVaccinationRecord } from './dto/CreateVaccinationRecord.dto';
import { Vaccination } from './schemas/vaccination.schema';

@Injectable()
export class VaccinationService {
  constructor(
    @InjectModel(Vaccination.name)
    private readonly vaccinationModel: Model<Vaccination>,
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
    @InjectModel(Place.name) private readonly placeModel: Model<Place>,
  ) {}

  async getVaccinationRecord() {
    return this.vaccinationModel.find();
  }

  async getVaccinationRecordById(id) {
    return this.vaccinationModel.findById(id);
  }

  async addVaccinationRecord(payload: CreateVaccinationRecord) {
    return this.vaccinationModel.create(payload);
  }
}
