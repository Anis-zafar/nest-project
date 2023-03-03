import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const globalprefix = 'api';
  app.setGlobalPrefix(globalprefix);
  const port = 3000;
  await app.listen(port, () => {
    Logger.log('Port is listening at ' + port + '/' + globalprefix);
  });
}
bootstrap();
