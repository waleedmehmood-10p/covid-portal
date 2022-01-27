import { Test, TestingModule } from '@nestjs/testing';
import { TestKitService } from './test-kit.service';

describe('TestKitService', () => {
  let service: TestKitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestKitService],
    }).compile();

    service = module.get<TestKitService>(TestKitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
