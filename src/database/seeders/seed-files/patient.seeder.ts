import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Seeder, DataFactory } from 'nestjs-seeder';
import { Patient } from 'src/modules/patient/schemas/patient.schema';

@Injectable()
export class PatientsSeeder implements Seeder {
  constructor(
    @InjectModel(Patient.name) private readonly patient: Model<Patient>,
  ) {}

  async seed(): Promise<any> {
    // Generate 10 patients.
    const patients = DataFactory.createForClass(Patient).generate(100);
    console.log(patients);
    // Insert into the database.
    return this.patient.insertMany(patients);
  }

  async drop(): Promise<any> {
    return this.patient.deleteMany({});
  }
}
