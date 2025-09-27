/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Post,
  Body,
  Headers,
  UnauthorizedException,
  BadRequestException,
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
  @Post('login')
  async login(@Body() body: LoginDto) {
    if (!body.email || !body.password)
      throw new BadRequestException('Email and password required');
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    return this.authService.login(user);
  }
  @Post('register')
  async register(@Body() body: RegisterDto) {
    if (!body.email || !body.password || !body.entity_id)
      throw new BadRequestException('All fields are required');
    return this.authService.register(body);
  }
  @Post('start')
  async start(@Body() body: StartDto) {
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
    return this.authService.start(body);
  }
  @Post('validate')
  async validate(@Headers('authorization') authHeader: string) {
    if (!authHeader)
      throw new BadRequestException('Authorization header required');
    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token)
      throw new BadRequestException('Invalid Authorization header format');
    return this.authService.validateToken(token);
  }
  @Post('refresh')
  async refresh(@Body() body: RefreshDto) {
    if (!body.r_token) throw new BadRequestException('r_token required');
    return this.authService.refreshToken(body.r_token);
  }
  @Post('revoke')
  async revoke(@Body() body: RevokeDto) {
    if (!body.r_token) throw new BadRequestException('r_token required');
    return this.authService.revokeToken(body.r_token);
  }
}
