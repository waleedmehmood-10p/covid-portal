import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateVaccinationRecord } from './dto/CreateVaccinationRecord.dto';
import { VaccinationService } from './vaccination.service';

@Controller('vaccination')
export class VaccinationController {
  constructor(private readonly vaccinationService: VaccinationService) {}

  @Get()
  getVaccinationRecord() {
    return this.vaccinationService.getVaccinationRecord();
  }

  @Get(':id')
  getVaccinationRecordById(@Param() param) {
    const { id } = param;
    return this.vaccinationService.getVaccinationRecordById(id);
  }

  @Post()
  addVaccinationRecord(@Body() body: CreateVaccinationRecord) {
    return this.vaccinationService.addVaccinationRecord(body);
  }
}
