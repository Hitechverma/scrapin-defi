import { Module } from '@nestjs/common';
import { ScrapingService } from './scraping/scraping.service';
import { ZeroxService } from './zerox/zerox/zerox.service';
import { ScrapingController } from './scraping.controller';
import { HttpModule } from '@nestjs/axios';
import { ZeroxModule } from './zerox/zerox/zerox.module';
import { ConfigModule } from '@nestjs/config';
import { ParaswapService } from './paraswap/paraswap/paraswap.service';


@Module({
  imports: [HttpModule, ZeroxModule, ConfigModule],
  providers: [ScrapingService, ZeroxService, ParaswapService],
  controllers: [ScrapingController]
})
export class ScrapingModule {}
