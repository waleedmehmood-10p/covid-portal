import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreateTestKitDto } from './dto/CreateTestKit.dto';
import { TestKitService } from './test-kit.service';

@Controller('test-kits')
export class TestKitController {
  constructor(private readonly testKitService: TestKitService) {}

  @Get()
  getTestKits() {
    return this.testKitService.getNumberOfKits();
  }
  @Post()
  addTestKits(@Req() req, @Body() body: CreateTestKitDto) {
    return this.testKitService.addTestKits(body);
  }
}
