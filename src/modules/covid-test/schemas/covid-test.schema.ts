import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place } from 'src/modules/place/schemas/place.schemas';
import { Factory } from 'nestjs-seeder';
import { CovidTestResult, COVID_TEST_RESULT } from './covid-test.constants';
const RandExp = require('randexp');

@Schema()
export class CovidTest {
  @Factory((faker) => faker.random.arrayElement(CovidTestResult))
  @Prop({
    type: String,
    required: true,
    enum: CovidTestResult,
  })
  testResult: COVID_TEST_RESULT;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Patient' })
  patientId: CovidTest;

  @Prop()
  testDate: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  testLocation: Place;
}

export type CovidTestDocument = CovidTest & Document;

export const CovidTestSchema = SchemaFactory.createForClass(CovidTest);
