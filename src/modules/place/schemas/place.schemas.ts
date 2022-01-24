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

interface GeoInterface {
  type: string;
  coordinates: [number];
}

export type PlaceDocument = Place & Document;

@Schema({
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    },
  },
})
export class Place {
  @Prop()
  name: string;

  @Prop({
    type: GeoLocSchema,
  })
  location: GeoInterface;

  @Prop()
  city: string;

  @Prop()
  country: string;
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
