import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ResponseSchema } from './common/schemas/response.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/orlenValues/')
  async getOrlenValues(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    try {
      const items = await this.appService.getOrlenValues(startDate, endDate);
      return new ResponseSchema(200, 'ok', {
        count: items.length,
        data: items,
      });
    } catch (err) {
      throw new BadRequestException('/orlenValues', err);
    }
  }

  @Get('/marketValues/')
  async getMarketValues(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    try {
      const items = await this.appService.getMarketValues(startDate, endDate);
      return new ResponseSchema(200, 'ok', {
        count: items.length,
        data: items,
      });
    } catch (err) {
      throw new BadRequestException('/marketValues', err);
    }
  }

  @Get('/exchangeValues/')
  async getExchangeValues(
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    try {
      const items = await this.appService.getExchangeValues(startDate, endDate);
      return new ResponseSchema(200, 'ok', {
        count: items.length,
        data: items,
      });
    } catch (err) {
      throw new BadRequestException('/exchangeValues', err);
    }
  }
}
