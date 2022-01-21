import { Module } from '@nestjs/common';
import { VaccinationService } from './vaccination.service';
import { VaccinationController } from './vaccination.controller';

@Module({
  providers: [VaccinationService],
  controllers: [VaccinationController]
})
export class VaccinationModule {}
