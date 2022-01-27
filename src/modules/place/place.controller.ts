import { Body, Controller, Get, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { PlaceService } from './place.service';

@Controller('places')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Get()
  async getAllPlaces() {
    return this.placeService.getAllPlaces();
  }

  @Post()
  async addPlace(@Req() req: Request, @Body() body: any) {
    const place = body;

    return this.placeService.createPlace(place);
  }

  @Get('/find-near')
  async findNear(@Req() req: Request, @Query() query: any) {
    const { location } = query;
    return this.placeService.findNear(
      location.split(',').map((x) => parseFloat(x)),
    );
  }
}
