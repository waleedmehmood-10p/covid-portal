import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VaccinationDocument = Vaccination & Document;

type VACCINATIONS_TYPE = 'INFECTED' | 'RECOVERED' | 'NEVER_INFECTED' | 'DEAD';
const VACCINATIONS: VACCINATIONS_TYPE[] = [
  'NEVER_INFECTED',
  'INFECTED',
  'RECOVERED',
  'DEAD',
];

@Schema()
export class Vaccination {
  @Prop()
  vaccinatedVaccination: string; // varchar [ref: > Vaccination.id]

  @Prop()
  vaccinationDate: Date;

  @Prop({
    enum: VACCINATIONS,
    required: true,
    index: true,
  })
  VaccinationName: string;

  @Prop()
  VaccinationCenter: string;

  @Prop()
  currentDistrict: string;
}

export const VaccinationSchema = SchemaFactory.createForClass(Vaccination);
