// import { Controller } from '@nestjs/common';

// @Controller('scraping')
// export class ScrapingController {}


import { Controller, Get, Query } from '@nestjs/common';
import { ScrapingService } from './scraping/scraping.service';
import { TokensDto } from '../dto/tokens.dto/tokens.dto';

@Controller('scraping')
export class ScrapingController {
  constructor(private readonly scrapingService: ScrapingService) {}

  @Get('price')
  async getPrice(@Query() tokensDto: TokensDto): Promise<number> {
    const { inputToken, outputToken } = tokensDto;
    return this.scrapingService.getPrice(inputToken, outputToken, 10000000000); // Adjust sell amount as needed
  }

  @Get('lastTrades')
  async getLastTrades(@Query() tokensDto: TokensDto): Promise<any[]> {
    const { inputToken, outputToken } = tokensDto;
    return this.scrapingService.getLastTrades(outputToken, inputToken); // Reversed tokens for 0x.org API
  }
}
