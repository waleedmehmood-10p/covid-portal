import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Patient, PatientSchema } from '../patient/schemas/patient.schema';
import { Place, PlaceSchema } from '../place/schemas/place.schemas';
import { TestKit, TestKitSchema } from '../test-kit/schemas/test-kit.schema';
import { CovidTestController } from './covid-test.controller';
import { CovidTestService } from './covid-test.service';
import { CovidTest, CovidTestSchema } from './schemas/covid-test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CovidTest.name, schema: CovidTestSchema },
      { name: Place.name, schema: PlaceSchema },
      { name: Patient.name, schema: PatientSchema },
      { name: TestKit.name, schema: TestKitSchema },
    ]),
  ],
  controllers: [CovidTestController],
  providers: [CovidTestService],
})
export class CovidTestModule {}
