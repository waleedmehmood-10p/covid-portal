import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsMongoId,
  IsNumber,
} from 'class-validator';
import { Schema } from 'mongoose';

export class CreatePatientTravelHistory {
  @IsDate()
  @ApiProperty({ type: Date, description: 'name' })
  travelDate: Date;

  @IsNumber()
  @ApiProperty()
  travellingDaysCount: number;

  @IsBoolean()
  @ApiProperty({ type: String, description: 'name' })
  abroad: boolean;

  @IsMongoId()
  @ApiProperty()
  placeId: Schema.Types.ObjectId;
}
