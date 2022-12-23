import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getOrlenValues(startDate, endDate): Promise<[]> {
    const response = await axios.get(
      `https://tool.orlen.pl/api/wholesalefuelprices/ByProduct?productId=43&from=${startDate}&to=${endDate}`,
    );
    return response.data;
  }

  async getMarketValues(startDateTimestamp, endDateTimestamp): Promise<[]> {
    const response = await axios.get(
      `https://notowania.pb.pl/new-charts/get-data?date_from=${startDateTimestamp}&date_to=${endDateTimestamp}&symbol=ROPA&intraday=false&type=area`,
      {
        headers: {
          'Accept-Encoding': '*',
        },
      },
    );
    return response.data;
  }
}
