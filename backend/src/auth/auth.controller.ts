/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Controller,
  Post,
  Body,
  Request,
  UnauthorizedException,
  BadRequestException,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
class LoginDto {
  email: string;
  password: string;
}
class RegisterDto {
  email: string;
  password: string;
  role_id: number;
  entity_id: number;
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
  async login(@Body() body: LoginDto, @Request() req: any) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ip = req.ip || null;
    const userAgentHeader = req.headers['user-agent'] || null;
    return this.authService.login(user, ip, userAgentHeader);
  }
  @Post('register')
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body);
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
