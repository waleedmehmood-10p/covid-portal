import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEnum, IsMongoId } from 'class-validator';
import { CovidTestResult } from '../schemas/covid-test.constants';

export class CreateCovidTestDto {
  @IsEnum(CovidTestResult)
  @ApiProperty({ type: String, description: 'name' })
  testResult: string;

  @IsMongoId()
  @ApiProperty({})
  patientId: string;

  @IsDateString()
  @ApiProperty({})
  testDate: Date;
}
