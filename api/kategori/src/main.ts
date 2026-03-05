import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // tambahkan prefix api
  app.setGlobalPrefix('api');
  app.set('json spaces', 2);

  await app.listen(process.env.PORT ?? 3001);
}
void bootstrap();
