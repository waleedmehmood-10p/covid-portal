import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from './schemas/place.schemas';

@Injectable()
export class PlaceService {
  constructor(
    @InjectModel(Place.name) private readonly placeModel: Model<Place>,
  ) {}

  async getAllPlaces(): Promise<Place[]> {
    return this.placeModel.find();
  }

  async getPlace() {
    return await this.placeModel.findById(1);
  }
  async createPlace(person: any): Promise<Place> {
    return this.placeModel.create(person);
  }

  async findNear(geoLocation: [number]) {
    // this.placeModel.createIndexes({ location: "2dsphere"}, (e) => {
    //   console.log(e)
    // });
    // this.placeModel.syncIndexes();
    // this.placeModel.ensureIndexes();
    // return this.placeModel.listIndexes();

    return this.placeModel.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: [-46.6954844, -23.5006969] },
          distanceField: 'distanceFromMe',
          maxDistance: 1000 * 1609.34,
          distanceMultiplier: 1 / 1609.34,
          spherical: true,
        },
      },
    ]);
  }
}
