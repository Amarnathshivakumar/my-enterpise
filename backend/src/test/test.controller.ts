import { Controller, Get, Post, Body } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateUserDto } from './create-user.dto';
import { registers_test } from '@prisma/client';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get('users')
  async getUsers(): Promise<registers_test[]> {
    return this.testService.findAll();
  }
  @Post('users')
  async createUser(@Body() dto: CreateUserDto): Promise<registers_test> {
    return this.testService.create(dto);
  }
}
