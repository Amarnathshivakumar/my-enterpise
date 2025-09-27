/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
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
    const user = await this.prisma.users.findUnique({ where: { email } });
    if (!user) return null;
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) return null;
    const { password: _, ...result } = user;
    return result;
  }
  async register(data: {
    email: string;
    password: string;
    role_id: number;
    entity_id: number;
  }) {
    if (!data.email || !data.password || !data.role_id || !data.entity_id) {
      throw new BadRequestException('All fields are required');
    }
    const exists = await this.prisma.users.findUnique({
      where: { email: data.email },
    });
    if (exists) throw new BadRequestException('Email already registered');
    if (data.password.length < 8)
      throw new BadRequestException('Password must be at least 8 characters');
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.users.create({
      data: {
        email: data.email,
        password: hashedPassword,
        role_id: data.role_id,
        entity_id: data.entity_id,
      },
    });
    const { password, ...result } = user;
    return result;
  }

  async login(
    user: Omit<users, 'password'>,
    ip?: string,
    userAgentHeader?: string,
  ) {
    const payload = { email: user.email, sub: user.id, role: user.role_id };
    const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const r_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    const existingActive = await this.prisma.refresh_tokens.findFirst({
      where: { user_id: user.id },
    });
    if (existingActive) {
      await this.prisma.refresh_tokens.updateMany({
        where: { user_id: user.id },
        data: { revoked: true },
      });
      await this.prisma.refresh_tokens.update({
        where: { id: existingActive.id },
        data: {
          token: r_token,
          user_agent: access_token,
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          ip: ip || null,
          revoked: false,
          replaced_by_token: null,
        },
      });
    } else {
      await this.prisma.refresh_tokens.create({
        data: {
          user_id: user.id,
          token: r_token,
          user_agent: access_token,
          expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
          ip: ip || null,
        },
      });
    }
    return { access_token, r_token };
  }
  async refreshToken(r_token: string) {
    const tokenRecord = await this.prisma.refresh_tokens.findFirst({
      where: { token: r_token, revoked: false },
      include: { users: true },
    });
    if (!tokenRecord || tokenRecord.expires_at < new Date())
      throw new UnauthorizedException('Invalid refresh token');
    const payload = {
      email: tokenRecord.users.email,
      sub: tokenRecord.user_id,
      role: tokenRecord.users.role_id,
    };
    const access_token = this.jwtService.sign(payload, { expiresIn: '1h' });
    const new_r_token = this.jwtService.sign(payload, { expiresIn: '7d' });
    await this.prisma.refresh_tokens.update({
      where: { id: tokenRecord.id },
      data: {
        token: new_r_token,
        user_agent: access_token,
        expires_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        revoked: false,
        replaced_by_token: tokenRecord.token,
      },
    });
    return { access_token, r_token: new_r_token };
  }
  async revokeToken(r_token: string) {
    const tokenRecord = await this.prisma.refresh_tokens.findFirst({
      where: { token: r_token, revoked: false },
    });
    if (!tokenRecord) return { revoked: false };
    await this.prisma.refresh_tokens.update({
      where: { id: tokenRecord.id },
      data: {
        token: '',
        user_agent: '',
        revoked: true,
        replaced_by_token: r_token,
      },
    });
    return { revoked: true };
  }
  async validateToken(token: string) {
    try {
      const payload = await this.jwtService.verifyAsync(token).catch(() => {
        throw new UnauthorizedException('Token expired or invalid');
      });
      const rRecord = await this.prisma.refresh_tokens.findFirst({
        where: { token, revoked: false },
      });
      if (rRecord) {
        if (rRecord.expires_at < new Date())
          throw new UnauthorizedException('Refresh token expired');
        return { valid: true, type: 'r_token', payload };
      }
      const aRecord = await this.prisma.refresh_tokens.findFirst({
        where: { user_agent: token, revoked: false },
      });
      if (aRecord) {
        if (aRecord.expires_at < new Date())
          throw new UnauthorizedException(
            'Access token expired (based on r_token expiry)',
          );
        return { valid: true, type: 'access_token', payload };
      }
      throw new UnauthorizedException('Token not found in database');
    } catch (e) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
