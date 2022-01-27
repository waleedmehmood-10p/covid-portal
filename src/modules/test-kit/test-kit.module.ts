import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TestKit, TestKitSchema } from './schemas/test-kit.schema';
import { TestKitController } from './test-kit.controller';
import { TestKitService } from './test-kit.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TestKit.name, schema: TestKitSchema }]),
  ],
  controllers: [TestKitController],
  providers: [TestKitService],
})
export class TestKitModule {}
