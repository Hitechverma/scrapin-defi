import { Injectable } from '@nestjs/common';
import { ZeroxService } from '../zerox/zerox/zerox.service';
import { ParaswapService } from '../paraswap/paraswap/paraswap.service';
@Injectable()
export class ScrapingService {
  constructor(
      private readonly zeroxService: ZeroxService,
      private readonly paraswapService: ParaswapService
    ) {}

  async getPrice(sellToken: string, buyToken: string, sellAmount: number): Promise<number> {
    return this.paraswapService.getPrice(sellToken, buyToken, sellAmount);
  }

  async getLastTrades(quoteToken: string, baseToken: string): Promise<any[]> {
    return this.zeroxService.getLastTrades(quoteToken, baseToken);
  }
}