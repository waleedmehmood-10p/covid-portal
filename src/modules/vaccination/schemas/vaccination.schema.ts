import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Patient } from 'src/modules/patient/schemas/patient.schema';
import { Place } from 'src/modules/place/schemas/place.schemas';

export type VaccinationDocument = Vaccination & Document;

type VACCINATIONS_TYPE =
  | 'Pfizer_BioNTech'
  | 'Oxford_AstraZeneca'
  | 'Sinopharm'
  | 'BIBP'
  | 'Moderna'
  | 'Janssen'
  | 'CoronaVac'
  | 'Covaxin'
  | 'Novavax';
export const VACCINATIONS: VACCINATIONS_TYPE[] = [
  'Pfizer_BioNTech',
  'Oxford_AstraZeneca',
  'Sinopharm',
  'BIBP',
  'Moderna',
  'Janssen',
  'CoronaVac',
  'Covaxin',
  'Novavax',
];

@Schema()
export class Vaccination {
  @Prop()
  vaccinationDate: Date;

  @Prop({
    enum: VACCINATIONS,
    required: true,
    index: true,
  })
  VaccinationName: string;

  @Prop()
  VaccinationCenterName: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  VaccinationCenterPlace: Place;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Patient' })
  patientId: Patient;
}

export const VaccinationSchema = SchemaFactory.createForClass(Vaccination);
