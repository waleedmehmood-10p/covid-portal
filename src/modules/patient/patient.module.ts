import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from '../place/schemas/place.schemas';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { Patient, PatientSchema } from './schemas/patient.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Patient.name, schema: PatientSchema },
      {
        name: Place.name,
        schema: PlaceSchema,
      },
    ]),
  ],
  controllers: [PatientController],
  providers: [PatientService],
})
export class PatientModule {}
