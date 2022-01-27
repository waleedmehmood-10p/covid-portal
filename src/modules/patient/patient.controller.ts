import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseFilters,
} from '@nestjs/common';
import { Request } from 'express';
import { MongoExceptionFilter } from 'src/common/filters/mongo-exception-filter';
import { CreatePatientTravelHistory } from './dto/create-patient-travel-history';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/UpdatePatient.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Get()
  async getAllPatients() {
    return this.patientService.getAllPatients();
  }

  @Get('findById/:id')
  async getPatientById(@Param() param) {
    const { id } = param;
    return this.patientService.getPatientById(id);
  }

  @Post()
  @UseFilters(MongoExceptionFilter)
  async addPatient(@Req() req: Request, @Body() body: CreatePatientDto) {
    return this.patientService.createPatient(body);
  }

  @Put(':id')
  async updatePatient(@Param() param, @Body() body: UpdatePatientDto) {
    const { id } = param;
    return this.patientService.updatePatient(id, body);
  }

  @Post(':id/travel-history')
  @UseFilters(MongoExceptionFilter)
  async addTravellingHistory(
    @Req() req: Request,
    @Body() body: CreatePatientTravelHistory,
    @Param('id') id,
  ) {
    return this.patientService.addTravellingHistory(id, body);
  }

  @Get('/positive')
  async getPositivePatients() {
    return this.patientService.getPositivePatients();
  }
}
