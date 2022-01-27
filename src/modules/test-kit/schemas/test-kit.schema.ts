import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Factory } from 'nestjs-seeder';

@Schema()
export class TestKit {
  @Factory(() => Math.random() * (10000 - 1000) + 1000)
  @Prop()
  totalKits: number;
}

export type TestKitDocument = TestKit & Document;

export const TestKitSchema = SchemaFactory.createForClass(TestKit);
