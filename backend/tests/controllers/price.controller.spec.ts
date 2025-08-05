import { Test, TestingModule } from '@nestjs/testing';
import { PriceController } from '../../src/controllers/price.controller';
import { PriceService } from '../../src/services/price.service';

describe('AppController', () => {
  let appController: PriceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PriceController],
      providers: [PriceService],
    }).compile();

    appController = app.get<PriceController>(PriceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
