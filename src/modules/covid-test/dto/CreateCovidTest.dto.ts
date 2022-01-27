import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsMongoId,
  IsOptional,
} from 'class-validator';
import { Schema } from 'mongoose';
import { CovidTestResult } from '../schemas/covid-test.constants';

export class CreateCovidTestDto {
  @IsEnum(CovidTestResult)
  @ApiProperty({ type: String, description: 'name' })
  testResult: string;

  @IsMongoId()
  @ApiProperty({})
  patientId: Schema.Types.ObjectId;

  @IsMongoId()
  @ApiProperty({})
  testLocation: Schema.Types.ObjectId;

  @IsDate()
  @ApiProperty({})
  testDate: Date;

  @IsBoolean()
  recentlyTravelled: boolean;

  @IsBoolean()
  @IsOptional()
  travelledAbroad: boolean;

  @IsMongoId()
  @IsOptional()
  travelledPlaceId: string;
}
