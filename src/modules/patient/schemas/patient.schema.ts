import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place } from 'src/modules/place/schemas/place.schemas';
import { Vaccination } from 'src/modules/vaccination/schemas/vaccination.schema';
import {
  AilementHistoryInterface,
  AilementHistorySchema,
} from './ailement-history.schema';
import { CNIC_REGEX_EXP, PatientStatus } from './patient.constants';
import {
  TravelHistoryInterface,
  TravelHistorySchema,
} from './travel-history.schema';
import { Factory } from 'nestjs-seeder';
const RandExp = require('randexp');

@Schema()
export class Patient {
  @Factory((faker) => faker.name.findName())
  @Prop()
  name: string;

  @Factory(() => new RandExp(CNIC_REGEX_EXP).gen())
  @Prop({
    type: String,
    length: 13,
    validate: (cnic: string) => cnic.match(CNIC_REGEX_EXP),
    index: true,
    unique: true,
  })
  CNIC: string;

  @Factory((faker) => faker.random.arrayElement(PatientStatus))
  @Prop({
    type: String,
    required: true,
    enum: PatientStatus,
    default: PatientStatus[0],
  })
  status: string;

  @Prop({ type: [TravelHistorySchema] })
  travelHistory: TravelHistoryInterface[];

  @Prop({ type: [AilementHistorySchema] })
  ailementHistory: AilementHistoryInterface[];

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  currentPlace: Place;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Vaccination' }] })
  vaccinations: Vaccination[];

  @Factory((faker) => faker.random.arrayElement([true, false]))
  @Prop()
  recentlyTravelled: boolean;
}

export type PatientDocument = Patient & Document;

export const PatientSchema = SchemaFactory.createForClass(Patient);
