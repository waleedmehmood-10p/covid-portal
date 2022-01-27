import { Injectable } from '@nestjs/common';
import { Model, Mongoose } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Patient } from './schemas/patient.schema';
import { PaginatedDto } from 'src/common/dto/paginadted-response.dto';
import { MongoError } from 'mongodb';
import { CreatePatientTravelHistory } from './dto/create-patient-travel-history';
import { Schema } from 'mongoose';
import { TravelHistoryInterface } from './schemas/travel-history.schema';
import { Place } from '../place/schemas/place.schemas';
import { IPatientStatus, PatientStatus } from './schemas/patient.constants';
import { UpdatePatientDto } from './dto/UpdatePatient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel(Patient.name) private readonly patientModel: Model<Patient>,
    @InjectModel(Place.name) private readonly placeModel: Model<Place>,
  ) {}

  async getAllPatients(): Promise<Patient[]> {
    return this.patientModel.find();
  }

  async getPatientById(id: string): Promise<Patient> {
    return this.patientModel.findById(id);
  }

  async getPatient() {
    return await this.patientModel.findById(1);
  }
  async createPatient(patient: any): Promise<Patient> {
    return this.patientModel.create(patient);
  }

  async updatePatient(id: string, payload: UpdatePatientDto): Promise<Patient> {
    return this.patientModel.findByIdAndUpdate(id, payload);
  }

  async addTravellingHistory(
    patientId: Schema.Types.ObjectId,
    travellingHistory: CreatePatientTravelHistory,
  ): Promise<any> {
    const patient = await this.patientModel.findById(patientId);
    const place = await this.placeModel.findById(travellingHistory.placeId);
    const travelHistoryItem: TravelHistoryInterface = {
      abroad: travellingHistory.abroad,
      placeId: travellingHistory.placeId,
      travelDate: new Date(travellingHistory.travelDate),
      travellingDaysCount: travellingHistory.travellingDaysCount,
      placeName: place.name,
    };

    if (patient.travelHistory) {
      patient.travelHistory.push(travelHistoryItem);
    } else {
      patient.travelHistory = [travelHistoryItem];
    }

    return patient.save();
  }

  async getPositivePatients() {
    const status: IPatientStatus = 'INFECTED';
    return this.patientModel.find({ status });
  }
}
