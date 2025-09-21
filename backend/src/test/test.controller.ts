import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TestService } from './test.service';
import { CreateUserDto } from './create-user.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}
  @Get('/')
  async checkDB() {
    return await this.testService.DBstatus();
  }
  @Get('extra/')
  async checkDB2() {
    return await this.testService.DBstatus2();
  }
  @Get('extra/user/:id')
  async getUserById(@Param('id') id: string) {
    return await this.testService.findOneById(Number(id));
  }
  @Get('extra/users')
  async getUsers() {
    return await this.testService.findAll();
  }
  @Post('extra/users')
  async createUser(@Body() dto: CreateUserDto) {
    return await this.testService.create(dto);
  }
}
