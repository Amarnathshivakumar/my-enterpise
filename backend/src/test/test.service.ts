import { Injectable } from '@nestjs/common';
import { PrismaClient as DBconexion } from '../../prisma/client';
import { PrismaClient as DBextra } from '../../prisma/Test';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class TestService {
  private db = new DBconexion();
  private dbtest = new DBextra();
  async DBstatus() {
    try {
      await this.db.$connect();
      const dbNameResult = await this.db.$queryRaw<
        { dbName: string }[]
      >`SELECT DATABASE() as dbName;`;
      const versionResult = await this.db.$queryRaw<
        { version: string }[]
      >`SELECT VERSION() as version;`;
      const hostResult = await this.db.$queryRaw<
        { host: string }[]
      >`SELECT @@hostname as host;`;
      return {
        success: true,
        message: 'Conexión exitosa a DB',
        database: dbNameResult[0]?.dbName ?? 'desconocida',
        host: hostResult[0]?.host ?? 'desconocido',
        version: versionResult[0]?.version ?? 'desconocida',
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, message: `Error de conexión DB1: ${message}` };
    } finally {
      await this.db.$disconnect();
    }
  }
  async DBstatus2() {
    try {
      await this.dbtest.$connect();
      const dbNameResult = await this.dbtest.$queryRaw<
        { dbName: string }[]
      >`SELECT DATABASE() as dbName;`;
      const versionResult = await this.dbtest.$queryRaw<
        { version: string }[]
      >`SELECT VERSION() as version;`;
      const hostResult = await this.dbtest.$queryRaw<
        { host: string }[]
      >`SELECT @@hostname as host;`;
      return {
        success: true,
        message: 'Conexión exitosa a DB extra',
        database: dbNameResult[0]?.dbName ?? 'desconocida',
        host: hostResult[0]?.host ?? 'desconocido',
        version: versionResult[0]?.version ?? 'desconocida',
      };
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      return { success: false, message: `Error de conexión DB1: ${message}` };
    } finally {
      await this.db.$disconnect();
    }
  }
  async findAll() {
    return await this.dbtest.registers_test.findMany();
  }
  async create(data: CreateUserDto) {
    return await this.dbtest.registers_test.create({ data });
  }
  async findOneById(id: number) {
    return await this.dbtest.registers_test.findUnique({
      where: { id_register: id },
    });
  }
}
