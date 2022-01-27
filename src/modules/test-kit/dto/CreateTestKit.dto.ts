import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, Max } from 'class-validator';

export class CreateTestKitDto {
  @IsInt()
  @IsPositive()
  @Max(10000000)
  @ApiProperty({ type: Number, description: 'Number of kits being added' })
  numberOfNewKits: number;
}
