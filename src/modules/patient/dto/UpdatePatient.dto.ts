import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsIn,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
import { CNIC_REGEX_EXP, PatientStatus } from '../schemas/patient.constants';

export class UpdatePatientDto {
  @IsBoolean()
  @IsOptional()
  @ApiProperty({})
  recentlyTravelled: boolean;

  @IsString()
  @IsIn(PatientStatus)
  @IsOptional()
  @ApiProperty({})
  status: string;

  @IsString()
  @Matches(CNIC_REGEX_EXP)
  @IsOptional()
  @ApiProperty({ type: String, description: 'CNIC' })
  CNIC: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ type: String, description: 'name' })
  name: string;
}
