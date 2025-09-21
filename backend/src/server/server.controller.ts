import { Controller, Get } from '@nestjs/common';

@Controller()
export class ServerController {
  @Get('/')
  checkService() {
    return {
      message: 'Backend activo',
      framework: 'NestJS',
      runtime: 'Node.js',
      packageManager: 'npm',
      language: 'TypeScript',
      ORM: 'Prisma',
      timestamp: new Date().toISOString(),
    };
  }
}
