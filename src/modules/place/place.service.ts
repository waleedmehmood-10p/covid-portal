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
  async createPlace(patient: any): Promise<Place> {
    return this.placeModel.create(patient);
  }

  async findNear(geoLocation: [number, number]) {
    return this.placeModel.aggregate([
      {
        $geoNear: {
          near: { type: 'Point', coordinates: geoLocation },
          distanceField: 'distanceFromMe',
          maxDistance: 1000 * 1609.34,
          distanceMultiplier: 1 / 1609.34,
          spherical: true,
        },
      },
    ]);
  }
}
