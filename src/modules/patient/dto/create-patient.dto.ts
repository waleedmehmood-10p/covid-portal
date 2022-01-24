import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString, Matches } from 'class-validator';
import { CNIC_REGEX_EXP, PatientStatus } from '../schemas/patient.schema';

export class CreatePatientDto {
  @IsString()
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @IsString()
  @Matches(CNIC_REGEX_EXP)
  @ApiProperty({ type: String, description: 'name' })
  CNIC: string;

  @IsString()
  @IsIn(PatientStatus)
  @ApiProperty({})
  status: string;
}
