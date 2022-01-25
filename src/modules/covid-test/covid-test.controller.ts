import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CovidTestService } from './covid-test.service';
import { CreateCovidTestDto } from './dto/CreateCovidTest.dto';

@Controller('covid-test')
export class CovidTestController {
  constructor(private readonly covidTestService: CovidTestService) {}

  @Get()
  async getAllCovidTests() {
    return this.covidTestService.getAllCovidTests();
  }

  @Post()
  async createCovidTest(@Req() req: Request, @Body() body: CreateCovidTestDto) {
    return this.covidTestService.createCovidTest(body);
  }
}
