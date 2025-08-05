import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService {
  getHello(): string {
    return 'Hello World!';
  }
}
