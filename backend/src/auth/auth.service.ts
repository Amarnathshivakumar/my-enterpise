/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { users } from '../../prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<users, 'password'> | null> {
    if (!email || !password)
      throw new BadRequestException('Email and password required');
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password);
    if (!match) return null;
    const { password: _, ...result } = user;
    return result;
  }

  async register(data: { email: string; password: string; entity_id: number }) {
    if (!data.email || !data.password || !data.entity_id)
      throw new BadRequestException('All fields are required');
    if (data.password.length < 8)
      throw new BadRequestException('Password must be at least 8 characters');
    const exists = await this.prisma.users.findUnique({
      where: { email: data.email },
    });
    if (exists) throw new BadRequestException('Email already registered');
    const hashed = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.users.create({
      data: {
        email: data.email,
        password: hashed,
        role_id: 5,
        entity_id: data.entity_id,
      },
    });
    const { password, ...result } = user;
    return result;
  }

  async start(data: {
    entity: {
      name: string;
      type: string;
      description: string;
      number: string;
      size: string;
      logo_url: string;
    };
    user: {
      email: string;
      password: string;
      spot_id?: number;
      profile_id?: number;
      last_login_at?: Date;
    };
  }) {
    const { entity, user } = data;
    const entityFields = [
      'name',
      'type',
      'description',
      'number',
      'size',
      'logo_url',
    ];
    for (const field of entityFields)
      if (!entity[field])
        throw new BadRequestException(`Entity field '${field}' is required`);
    const userFields = ['email', 'password'];
    for (const field of userFields)
      if (!user[field])
        throw new BadRequestException(`User field '${field}' is required`);
    if (user.password.length < 8)
      throw new BadRequestException('Password must be at least 8 characters');
    const existsUser = await this.prisma.users.findUnique({
      where: { email: user.email },
    });
    if (existsUser) throw new BadRequestException('Email already registered');
    const hashed = await bcrypt.hash(user.password, 10);
    const newEntity = await this.prisma.entities.create({
      data: { ...entity },
    });
    const newUser = await this.prisma.users.create({
      data: {
        email: user.email,
        password: hashed,
        role_id: 3,
        entity_id: newEntity.id_entity,
        spot_id: user.spot_id || null,
        profile_id: user.profile_id || null,
        last_login_at: user.last_login_at || null,
      },
    });
    const { password, ...resultUser } = newUser;
    return { entity: newEntity, user: resultUser };
  }

  async login(user: Omit<users, 'password'>) {
    const payload = {
      email: user.email,
      sub: user.id_user,
      role: user.role_id,
    };
    const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const r_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    const existing = await this.prisma.tokens.findFirst({
      where: { user_id: user.id_user },
    });
    if (existing) {
      await this.prisma.tokens.update({
        where: { id_token: existing.id_token },
        data: {
          r_token,
          access_token,
          exec_token: null,
          revoked: 0,
          status: 'logged',
          active: 1,
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    } else {
      await this.prisma.tokens.create({
        data: {
          user_id: user.id_user,
          r_token,
          access_token,
          revoked: 0,
          status: 'logged',
          active: 1,
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      });
    }
    await this.prisma.users.update({
      where: { id_user: user.id_user },
      data: { last_login_at: new Date() },
    });
    return { access_token, r_token };
  }

  async refreshToken(r_token: string) {
    if (!r_token) throw new BadRequestException('r_token required');
    const record = await this.prisma.tokens.findFirst({
      where: { r_token, revoked: 0 },
      include: { users: true },
    });
    if (!record) throw new UnauthorizedException('Invalid refresh token');
    const payload = {
      email: record.users.email,
      sub: record.user_id,
      role: record.users.role_id,
    };
    const new_access = this.jwtService.sign(payload, { expiresIn: '1h' });
    const new_r = this.jwtService.sign(payload, { expiresIn: '7d' });
    await this.prisma.tokens.update({
      where: { id_token: record.id_token },
      data: {
        access_token: new_access,
        exec_token: record.r_token,
        r_token: new_r,
        status: 'refreshed',
        revoked: 0,
        active: 1,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
    return { access_token: new_access, r_token: new_r };
  }

  async revokeToken(r_token: string) {
    if (!r_token) throw new BadRequestException('r_token required');
    const record = await this.prisma.tokens.findFirst({
      where: { r_token, revoked: 0 },
    });
    if (!record) return { revoked: false };
    await this.prisma.tokens.update({
      where: { id_token: record.id_token },
      data: {
        access_token: '',
        r_token: '',
        exec_token: r_token,
        status: 'revoked',
        revoked: 1,
        active: 0,
        expires_at: null,
      },
    });
    return { revoked: true };
  }

  async validateToken(token: string) {
    if (!token) throw new BadRequestException('Token required');
    const r = await this.prisma.tokens.findFirst({
      where: { r_token: token, revoked: 0 },
    });
    if (r)
      return {
        valid: true,
        type: 'r_token',
        payload: await this.jwtService.verifyAsync(token),
      };
    const a = await this.prisma.tokens.findFirst({
      where: { access_token: token, revoked: 0 },
    });
    if (a)
      return {
        valid: true,
        type: 'access_token',
        payload: await this.jwtService.verifyAsync(token),
      };
    throw new UnauthorizedException('Token not found');
  }
}
