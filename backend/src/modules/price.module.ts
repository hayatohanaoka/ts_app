import { Module } from '@nestjs/common';
import { PriceController } from '../controllers/price.controller';
import { ExtractService } from '../services/extract.service';
import { PriceService } from '../services/price.service';

@Module({
  imports: [],
  controllers: [PriceController],
  providers: [PriceService, ExtractService],
})
export class PriceModule {}
