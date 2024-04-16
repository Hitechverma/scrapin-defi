// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class ParaswapService {}


import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ParaswapService {
  constructor(
        private readonly httpService: HttpService,
        private readonly configService: ConfigService,
    ) {}

  async getPrice(sellToken: string, buyToken: string, sellAmount: number): Promise<number> {
    try {
      const psNetwork = this.configService.get<Number>('paraswap-network');
    //   const response = await this.httpService.get(`https://api.0x.org/swap/v1/price?sellToken=${sellToken}&buyToken=${buyToken}&sellAmount=${sellAmount}`,  {
    //     headers: {
    //       '0x-api-key': apiKey,
    //     },
    //   },).toPromise();

      const params = {
        srcToken: sellToken,
        destToken: buyToken,
        network: psNetwork,
        amount: sellAmount,
        otherExchangePrices: true,
      };
      
      const response = await this.httpService.get('https://apiv5.paraswap.io/prices', { params }).toPromise();
      
      return response.data;
    } catch (error) {
        console.log(error)
      throw new Error('Failed to fetch price data from the 0x aggregator.');
    }
  }
}