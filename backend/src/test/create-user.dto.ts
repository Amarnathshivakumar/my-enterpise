/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;
  @IsString()
  @IsOptional()
  apellido_paterno?: string;
  @IsString()
  @IsOptional()
  apellido_materno?: string;
  @IsString()
  @IsOptional()
  numero?: string;
  @IsEmail()
  @IsOptional()
  correo?: string;
  @IsOptional()
  genero?: 'M' | 'F' | 'O';
  @IsNumber()
  @IsOptional()
  edad?: number;
  @IsOptional()
  dinero_en_cuenta?: number;
}
