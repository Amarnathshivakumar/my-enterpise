import { Injectable } from '@nestjs/common';
import { PrismaClient, registers_test } from '@prisma/client';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class TestService {
  private prisma = new PrismaClient();
  async findAll(): Promise<registers_test[]> {
    return await this.prisma.registers_test.findMany();
  }
  async create(data: CreateUserDto): Promise<registers_test> {
    return await this.prisma.registers_test.create({ data });
  }
}
