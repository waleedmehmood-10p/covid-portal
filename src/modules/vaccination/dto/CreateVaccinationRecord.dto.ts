import { IsDate, IsIn, IsMongoId, IsString } from 'class-validator';
import { Schema } from 'mongoose';
import { VACCINATIONS } from '../schemas/vaccination.schema';

export class CreateVaccinationRecord {
  @IsIn(VACCINATIONS)
  VaccinationName: string;

  @IsString()
  VaccinationCenterName: string;

  @IsMongoId()
  VaccinationCenterPlace: Schema.Types.ObjectId;

  @IsMongoId()
  patientId: Schema.Types.ObjectId;

  @IsDate()
  vaccinationDate: Date;
}
