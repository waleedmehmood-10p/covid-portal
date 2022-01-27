import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationController } from './vaccination.controller';
import { Vaccination, VaccinationSchema } from './schemas/vaccination.schema';
import { Place, PlaceSchema } from '../place/schemas/place.schemas';
import { Patient, PatientSchema } from '../patient/schemas/patient.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Vaccination.name, schema: VaccinationSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: Patient.name, schema: PatientSchema },
    ]),
  ],
  providers: [VaccinationService],
  controllers: [VaccinationController],
})
export class VaccinationModule {}
