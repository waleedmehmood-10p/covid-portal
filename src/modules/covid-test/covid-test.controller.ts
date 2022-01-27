import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { CovidTestService } from './covid-test.service';
import { CreateCovidTestDto } from './dto/CreateCovidTest.dto';
import { UpdateCovidTestDto } from './dto/UpdateCovidTest.dto';

@Controller('covid-test')
export class CovidTestController {
  constructor(private readonly covidTestService: CovidTestService) {}

  @Get()
  async getAllCovidTests() {
    return this.covidTestService.getAllCovidTests();
  }

  @Get(':id')
  async getCovidTestById(@Param() param) {
    const { id } = param;
    return this.covidTestService.getCovidTestById(id);
  }

  @Post()
  async createCovidTest(@Req() req: Request, @Body() body: CreateCovidTestDto) {
    return this.covidTestService.createCovidTest(body);
  }

  @Put(':id')
  async updateCovidTest(
    @Req() req: Request,
    @Param() param: any,
    @Body() body: UpdateCovidTestDto,
  ) {
    const { id } = param;
    return this.covidTestService.updateCovidTest(id, body);
  }
}
