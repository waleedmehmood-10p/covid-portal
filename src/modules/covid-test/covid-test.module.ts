import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CovidTestController } from './covid-test.controller';
import { CovidTestService } from './covid-test.service';
import { CovidTest, CovidTestSchema } from './schemas/covid-test.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CovidTest.name, schema: CovidTestSchema },
    ]),
  ],
  controllers: [CovidTestController],
  providers: [CovidTestService],
})
export class CovidTestModule {}
