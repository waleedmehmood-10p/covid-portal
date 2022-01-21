import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonDocument = Person & Document;

type IPatientStatus = 'INFECTED' | 'RECOVERED' | 'NEVER_INFECTED' | 'DEAD';
const PatientStatus: IPatientStatus[] = [
  'NEVER_INFECTED',
  'INFECTED',
  'RECOVERED',
  'DEAD',
];

const CNIC_REGEX_EXP = '^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$';

@Schema()
export class Person {
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

  // @Prop({
  //   type:
  // })
  // currentLocation
}

export const PersonSchema = SchemaFactory.createForClass(Person);
