import { Test, TestingModule } from '@nestjs/testing';
import { CovidTestService } from './covid-test.service';

describe('CovidTestService', () => {
  let service: CovidTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CovidTestService],
    }).compile();

    service = module.get<CovidTestService>(CovidTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
