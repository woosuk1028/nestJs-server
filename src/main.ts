import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { readFileSync } from 'fs';

async function bootstrap() {
  // const httpsOptions = {
  //   key: readFileSync('/etc/letsencrypt/live/seok2.duckdns.org/privkey.pem'),
  //   cert: readFileSync('/etc/letsencrypt/live/seok2.duckdns.org/fullchain.pem'),
  // };

  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://seok2.duckdns.org', // 허용할 도메인
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  await app.listen(3001);
}
bootstrap();
