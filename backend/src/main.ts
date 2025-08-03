import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS設定を追加
  app.enableCors({
    origin: ['http://localhost:3001'], // BFFからのリクエストを許可
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
