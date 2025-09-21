import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaClientDB1 } from '../../prisma/client';
import { PrismaClient as PrismaClientDB2 } from '../../prisma/Test';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class TestService {
  private prismaDB1 = new PrismaClientDB1();
  private prismaDB2 = new PrismaClientDB2();
  async testDB1Connection() {
    try {
      await this.prismaDB1.$connect();
      return { success: true, message: 'Conexión exitosa a DB1' };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, message: `Error de conexión DB1: ${message}` };
    } finally {
      await this.prismaDB1.$disconnect();
    }
  }
  async findAll() {
    return await this.prismaDB2.registers_test.findMany();
  }
  async create(data: CreateUserDto) {
    return await this.prismaDB2.registers_test.create({ data });
  }
  async findOneById(id: number) {
    return await this.prismaDB2.registers_test.findUnique({
      where: { id_register: id },
    });
  }
}
