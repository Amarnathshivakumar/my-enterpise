/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { AuthService } from './auth.service';

class LoginDto {
  email: string;
  password: string;
}

class RegisterDto {
  email: string;
  password: string;
  entity_id: number;
}

class StartDto {
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
  };
}

class RefreshDto {
  r_token: string;
}

class RevokeDto {
  r_token: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('action')
  async action(@Body() body: { action: string; data: any }) {
    const { action, data } = body;
    if (!action || !data)
      throw new BadRequestException('Action and data are required');
    switch (action) {
      case 'login': {
        if (!data.email || !data.password)
          throw new BadRequestException('Email and password required');
        const user = await this.authService.validateUser(
          data.email,
          data.password,
        );
        if (!user) throw new UnauthorizedException('Invalid credentials');
        return this.authService.login(user);
      }
      case 'register': {
        if (!data.email || !data.password || !data.entity_id)
          throw new BadRequestException('All fields are required');
        return this.authService.register(data);
      }
      case 'start': {
        const entityFields = [
          'name',
          'type',
          'description',
          'number',
          'size',
          'logo_url',
        ];
        for (const f of entityFields)
          if (!data.entity?.[f])
            throw new BadRequestException(`Entity field '${f}' is required`);
        if (!data.user?.email || !data.user?.password)
          throw new BadRequestException('User email and password required');
        return this.authService.start(data);
      }
      case 'validate': {
        if (typeof data !== 'string')
          throw new BadRequestException('Token required as string');
        return this.authService.validateToken(data);
      }
      case 'refresh': {
        if (typeof data !== 'string')
          throw new BadRequestException('Refresh token required as string');
        return this.authService.refreshToken(data);
      }
      case 'revoke': {
        if (typeof data !== 'string')
          throw new BadRequestException('Refresh token required as string');
        return this.authService.revokeToken(data);
      }
      default:
        throw new BadRequestException(`Unknown action: ${action}`);
    }
  }
  @Post('login')
  login(@Body() body: LoginDto) {
    if (!body.email || !body.password)
      throw new BadRequestException('Email and password required');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
  @Post('register')
  register(@Body() body: RegisterDto) {
    if (!body.email || !body.password || !body.entity_id)
      throw new BadRequestException('All fields are required');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
  @Post('start')
  start(@Body() body: StartDto) {
    const entityFields = [
      'name',
      'type',
      'description',
      'number',
      'size',
      'logo_url',
    ];
    for (const field of entityFields) {
      if (!body.entity[field])
        throw new BadRequestException(`Entity field '${field}' is required`);
    }
    if (!body.user.email || !body.user.password)
      throw new BadRequestException('User email and password required');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
  @Post('validate')
  validate(@Headers('authorization') authHeader: string) {
    if (!authHeader)
      throw new BadRequestException('Authorization header required');
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token)
      throw new BadRequestException('Invalid Authorization header format');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
  @Post('refresh')
  refresh(@Body() body: RefreshDto) {
    if (!body.r_token) throw new BadRequestException('r_token required');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
  @Post('revoke')
  revoke(@Body() body: RevokeDto) {
    if (!body.r_token) throw new BadRequestException('r_token required');
    throw new ForbiddenException('Direct access blocked, use /auth/action');
  }
}
