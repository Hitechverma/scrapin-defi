import { Test, TestingModule } from '@nestjs/testing';
import { ParaswapService } from './paraswap.service';

describe('ParaswapService', () => {
  let service: ParaswapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParaswapService],
    }).compile();

    service = module.get<ParaswapService>(ParaswapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
