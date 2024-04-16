import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ZeroxService {
  constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {}

  async getPrice(sellToken: string, buyToken: string, sellAmount: number): Promise<number> {
    try {
      const apiKey = this.configService.get<string>('0x-api-key');
      const response = await this.httpService.get(`https://api.0x.org/swap/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${sellAmount}`,  {
        headers: {
          '0x-api-key': apiKey,
        },
      },).toPromise();
      return response.data;
    } catch (error) {
        console.log(error)
      throw new Error('Failed to fetch price data from the 0x aggregator.');
    }
  }

  async getLastTrades(quoteToken: string, baseToken: string): Promise<any[]> {
    try {
      let records = []
      const apiKey = this.configService.get<string>('0x-api-key');
      const response = await this.httpService.get(`https://api.0x.org/orderbook/v1?quoteToken=${quoteToken}&baseToken=${baseToken}&perPage=1000`,  {
        headers: {
          '0x-api-key': apiKey,
        },
      },).toPromise();
      response.data.bids.records.forEach(element => {
        records.push(element)
      });
      response.data.asks.records.forEach(element => {
        records.push(element)
      });
      return records;
    } catch (error) {
        console.log(error)
      throw new Error('Failed to fetch trade data from the 0x aggregator.');
    }
  }
}