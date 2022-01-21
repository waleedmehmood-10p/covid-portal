import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreatePatientDto {
  @IsString()
  @ApiProperty({ type: String, description: 'name' })
  name: string;

  @IsString()
  @ApiProperty({ type: String, description: 'name' })
  CNIC: string;
}
