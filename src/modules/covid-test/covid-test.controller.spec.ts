import { Test, TestingModule } from '@nestjs/testing';
import { CovidTestController } from './covid-test.controller';

describe('CovidTestController', () => {
  let controller: CovidTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CovidTestController],
    }).compile();

    controller = module.get<CovidTestController>(CovidTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
