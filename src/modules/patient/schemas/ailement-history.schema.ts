import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place } from 'src/modules/place/schemas/place.schemas';
import { PatientStatus } from './patient.constants';

@Schema()
export class AilementHistory {
  @Prop()
  inftectedDate: Date;

  @Prop()
  recoveringDate: Date;

  @Prop({
    type: String,
    required: true,
    enum: PatientStatus,
    default: PatientStatus[0],
  })
  status: string;

  @Prop()
  placeName: string;

  @Prop()
  abroad: boolean;
}

export interface AilementHistoryInterface {
  ailementDate: Date;
  placeId: MongooseSchema.Types.ObjectId;
  placeName: string;
  abroad: boolean;
  ailementlingDaysCount: number;
}

export type AilementHistoryDocument = AilementHistory & Document;
export const AilementHistorySchema =
  SchemaFactory.createForClass(AilementHistory);
