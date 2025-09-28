/**
 * =====================================================
 *  NAME    : main.ts
 *  DESCRIPTION: create server
 * =====================================================
 */

// DEPENDENCIES
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// EXEC
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
