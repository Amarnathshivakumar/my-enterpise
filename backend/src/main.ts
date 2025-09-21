/**
 * =====================================================
 *  NAME    : main.ts
 *  DESCRIPTION: create server
 * =====================================================
 */

// DEPENDENCIES
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// EXEC
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT ?? 3001);
}

void bootstrap();
