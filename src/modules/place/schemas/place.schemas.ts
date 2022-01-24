import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { GeoInterface, GeoLocSchema } from './geo-loc.schema';

@Schema({
  // toJSON: {
  //   transform(doc, ret) {
  //     ret.id = ret._id;
  //     delete ret._id;
  //     delete ret.__v;
  //   },
  // },
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

  @Prop()
  countryCode: string;
}

export interface PlaceInterface {
  _id: Types.ObjectId;
  name: string;
  location: {
    _id: Types.ObjectId;
    coordinates: [number, number];
    type: string;
  };
  city: string;
  country: string;
  countryCode: string;
}

export type PlaceDocument = Place & Document;
export const PlaceSchema = SchemaFactory.createForClass(Place);
