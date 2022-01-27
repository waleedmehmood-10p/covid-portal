import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { CovidTestResult } from '../schemas/covid-test.constants';

export class UpdateCovidTestDto {
  @IsEnum(CovidTestResult)
  @IsOptional()
  @ApiProperty({ type: String, description: 'name' })
  testResult: string;
}
