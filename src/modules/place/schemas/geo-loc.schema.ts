import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class GeoLoc extends Document {
  @Prop({
    type: String,
    enum: ['Point'],
    default: 'Point',
    required: true,
  })
  type: string;

  @Prop({
    type: [Number],
    required: true,
    index: '2dsphere',
  })
  coordinates: [number];
}
export const GeoLocSchema = SchemaFactory.createForClass(GeoLoc);

export interface GeoInterface {
  type: string;
  coordinates: [number];
}
