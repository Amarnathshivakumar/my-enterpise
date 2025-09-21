import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateUserDto } from './create-user.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get('db/check')
  async checkDB1() {
    return await this.testService.testDB1Connection();
  }
  @Get('users')
  async getUsers() {
    return await this.testService.findAll();
  }
  @Post('users')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.testService.create(dto);
  }
  @Get('user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.testService.findOneById(Number(id));
  }
}
