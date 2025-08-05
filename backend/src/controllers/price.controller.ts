import { Controller, Get } from '@nestjs/common';
import { PriceService } from '../services/price.service';

@Controller()
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  getHello(): string {
    return this.priceService.getHello();
  }
}
