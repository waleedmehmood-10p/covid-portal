import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TravelHistory, TravelHistoryInterface, TravelHistorySchema } from './travel-history.schema';

type IPatientStatus = 'INFECTED' | 'RECOVERED' | 'NEVER_INFECTED' | 'DEAD';
export const PatientStatus: IPatientStatus[] = [
  'NEVER_INFECTED',
  'INFECTED',
  'RECOVERED',
  'DEAD',
];

export const CNIC_REGEX_EXP = '^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$';

@Schema()
export class Patient {
  @Prop()
  name: string;

  @Prop({
    type: String,
    length: 13,
    validate: (cnic: string) => cnic.match(CNIC_REGEX_EXP),
    index: true,
    unique: true,
  })
  CNIC: string;

  @Prop({
    type: String,
    required: true,
    enum: PatientStatus,
    default: PatientStatus[0],
  })
  status: string;

  @Prop({ type: [TravelHistorySchema] })
  travelHistory: TravelHistoryInterface[];
}

export type PatientDocument = Patient & Document;

export const PatientSchema = SchemaFactory.createForClass(Patient);
