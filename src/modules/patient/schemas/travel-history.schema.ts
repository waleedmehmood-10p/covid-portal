import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Place } from 'src/modules/place/schemas/place.schemas';

@Schema()
export class TravelHistory {
  @Prop()
  travelDate: Date;

  @Prop()
  travellingDaysCount: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Place' })
  placeId: Place;

  @Prop()
  placeName: string;

  @Prop()
  abroad: boolean;
}

export interface TravelHistoryInterface {
  travelDate: Date;
  placeId: MongooseSchema.Types.ObjectId;
  placeName: string;
  abroad: boolean;
  travellingDaysCount: number;
}

export type TravelHistoryDocument = TravelHistory & Document;
export const TravelHistorySchema = SchemaFactory.createForClass(TravelHistory);
