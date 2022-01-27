import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Seeder } from 'nestjs-seeder';
import { Place, PlaceInterface } from 'src/modules/place/schemas/place.schemas';
import PLACES_DATA from './places-data';

const ObjectId = Types.ObjectId;
@Injectable()
export class PlacesSeeder implements Seeder {
  constructor(@InjectModel(Place.name) private readonly place: Model<Place>) {}

  async seed(): Promise<any> {
    // Generate 10 places.
    const placesData: PlaceInterface[] = PLACES_DATA.map((x) => {
      const _id1 = new ObjectId();
      const _id2 = new ObjectId();
      const placeObj: PlaceInterface = {
        _id: _id1,
        location: {
          coordinates: [x.lat, x.lng],
          type: 'Point',
          _id: _id2,
        },
        name: x.district,
        city: x.city,
        country: x.country,
        countryCode: x.countryCode,
      };
      return placeObj;
    });
    // Insert into the database.
    return this.place.insertMany(placesData);
  }

  async drop(): Promise<any> {
    return this.place.deleteMany({});
  }
}
