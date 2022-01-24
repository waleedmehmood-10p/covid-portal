import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsDateString, IsMongoId, IsNumber } from 'class-validator';
import { Schema } from 'mongoose';

export class CreatePatientTravelHistory {
  @IsDateString()
  @ApiProperty({ type: String, description: 'name' })
  travelDate: string;

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
