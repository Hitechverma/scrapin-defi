import { Test, TestingModule } from '@nestjs/testing';
import { ZeroxService } from './zerox.service';

describe('ZeroxService', () => {
  let service: ZeroxService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZeroxService],
    }).compile();

    service = module.get<ZeroxService>(ZeroxService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
