import { Test, TestingModule } from '@nestjs/testing';
import { TestKitController } from './test-kit.controller';

describe('TestKitController', () => {
  let controller: TestKitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestKitController],
    }).compile();

    controller = module.get<TestKitController>(TestKitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
